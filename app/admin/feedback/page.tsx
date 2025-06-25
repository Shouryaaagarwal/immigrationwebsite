'use client'

import Navbar from '@/app/components/Navbar';
import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiEye, FiX } from 'react-icons/fi';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface Feedback {
  _id: string;
  name: string;
  rating: number;
  description: string;
  testimonial?: string;
  userId: string;
  createdAt?: string;
}

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedFeedback, setSelectedFeedback] = useState<Feedback | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const feedbacksPerPage = 6;
  const [totalPages, setTotalPages] = useState(1);

  // Fetch feedback from API
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch(`/api/users/feedback?page=${currentPage}&limit=${feedbacksPerPage}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch feedbacks');
        }

        const data = await response.json();
        
        if (data.success) {
          setFeedbacks(data.data);
          setTotalPages(data.pagination.pages);
        } else {
          throw new Error(data.error || 'Failed to fetch feedbacks');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load feedback');
        console.error('Error fetching feedbacks:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeedbacks();
  }, [currentPage]); // Re-fetch when page changes

  // Handle delete feedback
  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      try {
        const response = await fetch(`/api/users/feedback`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ feedbackId: id })
        });

        if (!response.ok) {
          throw new Error('Failed to delete feedback');
        }

        const data = await response.json();
        
        if (data.success) {
          // Refresh the list after deletion
          setFeedbacks(prev => prev.filter(f => f._id !== id));
          setIsModalOpen(false);
          
          // If we deleted the last item on the page, go back a page
          if (feedbacks.length === 1 && currentPage > 1) {
            setCurrentPage(prev => prev - 1);
          }
        } else {
          throw new Error(data.error || 'Failed to delete feedback');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to delete feedback');
        console.error('Error deleting feedback:', err);
      }
    }
  };

  // Render star rating (keep your existing implementation)
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }

    return stars;
  };

  // Handle view details (keep your existing implementation)
  const handleViewDetails = (id: string) => {
    const feedback = feedbacks.find((f) => f._id === id);
    if (feedback) {
      setSelectedFeedback(feedback);
      setIsModalOpen(true);
    }
  };

  // Pagination handlers (keep your existing implementation)
  const handlePrevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

  // Modal handlers (keep your existing implementation)
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFeedback(null);
  };
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <Navbar />
      <div className="max-w-7xl mx-auto mt-8">
        <h1 className="text-xl sm:text-2xl md:text-4xl mt-20 sm:mt-28 font-normal text-[#155da9] mb-6">User Feedback</h1>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 text-sm sm:text-lg">{error}</div>
        ) : feedbacks.length === 0 ? (
          <div className="text-center text-gray-500 text-sm sm:text-lg">No feedback available.</div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {feedbacks.map((feedback) => (
                <div
                  key={feedback._id}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">{feedback.name}</h3>
                  </div>
                  <div className="flex items-center mb-4">
                    {renderStars(feedback.rating)}
                    <span className="ml-2 text-xs sm:text-sm text-gray-600">({feedback.rating.toFixed(1)})</span>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 mb-4">
                    {feedback.testimonial || feedback.description}
                  </p>
                  <button
                    onClick={() => handleViewDetails(feedback._id)}
                    className="flex items-center text-[#c30e16] hover:text-blue-800 text-xs sm:text-sm font-medium"
                  >
                    <FiEye className="mr-1" /> View Details
                  </button>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-8 space-x-2 sm:space-x-4">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`p-1 sm:p-2 rounded-full ${
                    currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  <FiChevronLeft size={20} className="sm:w-6 sm:h-6" />
                </button>
                <span className="text-gray-600 text-sm sm:text-base">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`p-1 sm:p-2 rounded-full ${
                    currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  <FiChevronRight size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>
            )}
          </>
        )}

        {/* Modal */}
        {isModalOpen && selectedFeedback && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={handleOutsideClick}
          >
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl max-w-sm sm:max-w-md md:max-w-lg w-full mx-4 transition-all duration-300">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{selectedFeedback.name}</h2>
                <button
                  onClick={closeModal}
                  className="text-blue-600 hover:text-blue-800"
                  aria-label="Close modal"
                >
                  <FiX size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>
              <div className="flex items-center mb-4">
                {renderStars(selectedFeedback.rating)}
                <span className="ml-2 text-xs sm:text-sm text-gray-600">({selectedFeedback.rating.toFixed(1)})</span>
              </div>
              <div className="mb-6">
                <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-2">Feedback</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {selectedFeedback.testimonial || selectedFeedback.description}
                </p>
              </div>
              {selectedFeedback.createdAt && (
                <div className="mb-4">
                  <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-2">Submitted</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {new Date(selectedFeedback.createdAt).toLocaleDateString()}
                  </p>
                </div>
              )}
              <div className="flex justify-end">
                <button
                  onClick={() => handleDelete(selectedFeedback._id)}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-xs sm:text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedbacks;