'use client'

import { FiArrowLeft, FiCheck, FiDownload, FiExternalLink } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState, use } from 'react';
import Navbar from '@/app/components/Navbar';
import axios from 'axios';
import { toast } from 'react-toastify';
import { PDFDownloadLink, Document as PDFDocument, Page, View, Text, StyleSheet, Image } from '@react-pdf/renderer';

// Define interfaces
interface User {
  id: string;
  name: string;
  email: string;
  status: 'pending' | 'done';
}

interface Document {
  _id: string;
  userId: string;
  type: string;
  submittedDate: Date;
  fileUrl: string;
  description?: string;
}

interface Tracker {
  _id: string;
  userId: string;
  result: boolean;
  status: 'pending' | 'done';
}


const UserDetailsPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [tracker, setTracker] = useState<Tracker | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  
  const { id: userId } = use(params);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch tracker data first
        const trackerResponse = await axios.get(`/api/tracker/${userId}`);
        const trackerData = trackerResponse.data.tracker;
        setTracker(trackerData);

        // Then fetch user, documents, and form data
        const [userResponse, docsResponse] = await Promise.all([
          fetch(`/api/users/open-user/${userId}`),
          fetch(`/api/users/user_documents/${userId}`),
        ]);

        if (!userResponse.ok) throw new Error('Failed to fetch user data');
        if (!docsResponse.ok) throw new Error('Failed to fetch documents');

        const [userData, docsData] = await Promise.all([
          userResponse.json(),
          docsResponse.json(),
  
        ]);

        setUser(userData);
   
        // Process documents
        let extractedDocs: Document[] = [];
        
        if (Array.isArray(docsData)) {
          extractedDocs = docsData.flatMap((doc: any) => {
            const documents: Document[] = [];
            
            // Handle single documents
            if (doc.passport?.url) {
              documents.push({
                _id: `${doc._id}-passport`,
                userId: doc.userId,
                type: 'Passport',
                submittedDate: doc.createdAt || new Date(),
                fileUrl: doc.passport.url
              });
            }
        
            if (doc.countryVisa?.url) {
              documents.push({
                _id: `${doc._id}-countryVisa`,
                userId: doc.userId,
                type: 'Country Visa',
                submittedDate: doc.createdAt || new Date(),
                fileUrl: doc.countryVisa.url,
                description: doc.countryVisa.description
              });
            }
        
            if (doc.birthCertificate?.url) {
              documents.push({
                _id: `${doc._id}-birthCertificate`,
                userId: doc.userId,
                type: 'Birth Certificate',
                submittedDate: doc.createdAt || new Date(),
                fileUrl: doc.birthCertificate.url,
                description: doc.birthCertificate.description
              });
            }
        
            // Handle array documents
            if (Array.isArray(doc.marksheets)) {
              doc.marksheets.forEach((marksheet: any, index: number) => {
                if (marksheet.url) {
                  documents.push({
                    _id: `${doc._id}-marksheet-${index}`,
                    userId: doc.userId,
                    type: `Marksheet ${index + 1}`,
                    submittedDate: doc.createdAt || new Date(),
                    fileUrl: marksheet.url,
                    description: marksheet.description
                  });
                }
              });
            }
        
            if (Array.isArray(doc.previousWork)) {
              doc.previousWork.forEach((work: any, index: number) => {
                if (work.url) {
                  documents.push({
                    _id: `${doc._id}-previousWork-${index}`,
                    userId: doc.userId,
                    type: `Previous Work ${index + 1}`,
                    submittedDate: doc.createdAt || new Date(),
                    fileUrl: work.url,
                    description: work.description
                  });
                }
              });
            }
        
            if (Array.isArray(doc.previousRefusals)) {
              doc.previousRefusals.forEach((refusal: any, index: number) => {
                if (refusal.url) {
                  documents.push({
                    _id: `${doc._id}-previousRefusal-${index}`,
                    userId: doc.userId,
                    type: `Previous Refusal ${index + 1}`,
                    submittedDate: doc.createdAt || new Date(),
                    fileUrl: refusal.url
                  });
                }
              });
            }
        
            // Handle nationalId if it's a URL
            if (doc.nationalId && typeof doc.nationalId === 'string' && doc.nationalId.startsWith('http')) {
              documents.push({
                _id: `${doc._id}-nationalId`,
                userId: doc.userId,
                type: 'National ID',
                submittedDate: doc.createdAt || new Date(),
                fileUrl: doc.nationalId
              });
            }
        
            return documents;
          });
        }
        
        setDocuments(extractedDocs);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  const handleDownloadForm = () => {
    try {
      if (!userId) throw new Error('User ID is missing');
      router.push(`/admin/user/userformpdf/${userId}`);
    } catch (error) {
      console.error('Navigation error:', error);
      toast.error('Failed to navigate to form page');
    }
  };


  const updateTrackerStatus = async (result: boolean) => {
    try {
      setLoading(true);
      setError(null);

      // Update tracker result
      const response = await axios.patch(`/api/tracker/${userId}`, {
        field: 'result',
        value: result,
      });

      // Update local state
      setTracker(prev => ({
        ...prev!,
        result,
        status: result ? "done" : "pending"
      }));

      toast(`Status updated to ${result ? 'done' : 'pending'} successfully!`);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-4">Error</h2>
          <p className="text-gray-700 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!user || !tracker ) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">User Not Found</h2>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Users
          </button>
        </div>
      </div>
    );
  }

  // Determine status based on tracker.result
  const currentStatus = tracker.result ? true : false;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="absolute top-[110px] left-4 z-10">
        <button 
          onClick={() => router.back()}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <FiArrowLeft className="mr-2" /> Back to Users
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-[160px] pb-8">
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#c30e16] to-[#155da9] p-6 text-white">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-16 w-16 rounded-full bg-blue-300 flex items-center justify-center text-2xl font-bold text-blue-800">
                {user.name.charAt(0)}
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-blue-100">{user.email}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-medium text-gray-900">{user.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Address</p>
                    <p className="font-medium text-gray-900">{user.email}</p>
                  </div>
  
                  <div>
                    <p className="text-sm text-gray-500">Account Status</p>
                    <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                      currentStatus === true ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-black'
                    }`}>
                      {currentStatus ? 'done' : 'pending'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <button 
                onClick={() => updateTrackerStatus(true)}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
              >
                <FiCheck className="mr-2" /> Approve 
              </button>
              <button 
                onClick={() => updateTrackerStatus(false)}
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center"
              >
                Reject 
              </button>
              
                <button
                  onClick={handleDownloadForm}
                className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors flex items-center">
                     Download Form
              </button>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">📄 Submitted Documents</h2>

            
              {documents.length === 0 ? (
                <div className="bg-gray-50 p-8 text-center rounded-xl">
                  <p className="text-gray-500">No documents submitted yet</p>
                </div>
              ) : (
                <div className="overflow-hidden border border-gray-200 rounded-xl">
                  <table className="min-w-full bg-white">
                    <thead className="text-white" style={{
                      background: "linear-gradient(90deg, #155da9, #c30e16)",
                    }}>
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Document Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Submitted Date</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {documents.map((doc) => (
                        <tr key={doc._id} className="bg-white hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {doc.type}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {new Date(doc.submittedDate).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </td>
                          <td className="px-6 py-4 text-sm text-center">
                            <a
                              href={doc.fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#155da9] to-[#c30e16] text-white rounded-lg hover:opacity-90 transition"
                            >
                              <FiExternalLink className="mr-2" />
                              View
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;



