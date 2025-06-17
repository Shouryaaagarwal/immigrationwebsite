'use client'

import Navbar from '@/app/components/Navbar';
import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiEye, FiX } from 'react-icons/fi';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface Feedback {
  id: string;
  name: string;
  rating: number;
  description: string;
}

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedFeedback, setSelectedFeedback] = useState<Feedback | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const feedbacksPerPage = 6;

  // Mock API call to fetch feedback (replace with actual API endpoint)
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        setIsLoading(true);
        // Simulated API response
        const mockData: Feedback[] = [
          { id: '1', name: 'John Doe', rating: 4.5, description: 'Great service, very responsive team! The support was prompt, and all my queries were resolved quickly.' },
          { id: '2', name: 'Jane Smith', rating: 3.0, description: 'Average experience, could improve communication. The process was smooth, but I had to follow up multiple times.' },
          { id: '3', name: 'Alice Johnson', rating: 5.0, description: 'Exceptional support, highly recommend! The team went above and beyond.' },
          { id: '4', name: 'Bob Wilson', rating: 4.0, description: 'Good overall, minor issues with delays. The quality was great, but the timeline could be improved.' },
          { id: '5', name: 'Emma Brown', rating: 2.5, description: 'Needs improvement in customer service. Response times were slow.' },
          { id: '6', name: 'Michael Lee', rating: 4.8, description: 'Fantastic experience, will use again! The team was professional.' },
          { id: '7', name: 'Sarah Davis', rating: 3.5, description: 'Decent service, but room for growth. Communication could be better.' },
          { id: '8', name: 'David Clark', rating: 5.0, description: 'Outstanding, exceeded expectations! Every step was handled with care.' },
        ];
        // Replace with actual API call, e.g., const response = await axios.get('/api/feedbacks');
        setFeedbacks(mockData);
      } catch (err) {
        setError('Failed to load feedback. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  // Calculate pagination
  const indexOfLastFeedback = currentPage * feedbacksPerPage;
  const indexOfFirstFeedback = indexOfLastFeedback - feedbacksPerPage;
  const currentFeedbacks = feedbacks.slice(indexOfFirstFeedback, indexOfLastFeedback);
  const totalPages = Math.ceil(feedbacks.length / feedbacksPerPage);

  // Handle pagination navigation
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Render star rating
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

  // Handle view details (open modal)
  const handleViewDetails = (id: string) => {
    const feedback = feedbacks.find((f) => f.id === id);
    if (feedback) {
      setSelectedFeedback(feedback);
      setIsModalOpen(true);
    }
  };

  // Handle delete feedback
  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      try {
        // Mock API call to delete feedback
        // Replace with actual API call, e.g., await axios.delete(`/api/feedback/${id}`);
        setFeedbacks((prev) => prev.filter((f) => f.id !== id));
        setIsModalOpen(false);
      } catch (err) {
        setError('Failed to delete feedback. Please try again.');
      }
    }
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFeedback(null);
  };

  // Handle outside click to close modal
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
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
              {currentFeedbacks.map((feedback) => (
                <div
                  key={feedback.id}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">{feedback.name}</h3>
                  </div>
                  <div className="flex items-center mb-4">
                    {renderStars(feedback.rating)}
                    <span className="ml-2 text-xs sm:text-sm text-gray-600">({feedback.rating})</span>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 mb-4">{feedback.description}</p>
                  <button
                    onClick={() => handleViewDetails(feedback.id)}
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
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="text-blue-600 hover:text-blue-800"
                  aria-label="Close modal"
                >
                  <FiX size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">{selectedFeedback.name}</h2>
              <div className="flex items-center mb-4">
                {renderStars(selectedFeedback.rating)}
                <span className="ml-2 text-xs sm:text-sm text-gray-600">({selectedFeedback.rating})</span>
              </div>
              <div className="mb-6">
                <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-2">Description</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{selectedFeedback.description}</p>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => handleDelete(selectedFeedback.id)}
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