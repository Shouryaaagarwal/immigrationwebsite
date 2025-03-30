// app/admin/user/[id]/page.tsx
'use client'

import { FiArrowLeft, FiCheck, FiX, FiDownload } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import React from 'react';
import Navbar from '@/app/components/Navbar';

interface User {
  id: string;
  name: string;
  email: string;
  nationality: string;
  status: 'active' | 'inactive' | 'pending';
  documents: {
    type: string;
    submittedDate: string;
    verified: boolean;
    fileUrl?: string;
  }[];
}

const UserDetailsPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  
  // Mock user data - replace with actual API call
  const user: User = {
    id: params.id,
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    nationality: 'United States',
    status: 'active',
    documents: [
      {
        type: 'Passport Copy',
        submittedDate: '2023-05-10',
        verified: true,
        fileUrl: '#'
      },
      {
        type: 'Application Form',
        submittedDate: '2023-05-12',
        verified: false,
        fileUrl: '#'
      },
      {
        type: 'Proof of Address',
        submittedDate: '2023-05-15',
        verified: true,
        fileUrl: '#'
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Back button positioned at top left */}
      <div className="absolute top-[110px] left-4 z-10">
        <button 
          onClick={() => router.back()}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <FiArrowLeft className="mr-2" /> Back to Users
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-[160px] pb-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* User Profile Header */}
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

          {/* User Details */}
          <div className="p-6 mt-4">
            <div className="grid grid-cols-1 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Basic Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-medium">{user.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Address</p>
                    <p className="font-medium">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Nationality</p>
                    <p className="font-medium">{user.nationality}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Account Status</p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === 'active' ? 'bg-green-100 text-green-800' :
                      user.status === 'inactive' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                <FiCheck className="mr-2" /> Received Details
              </button>
              <button className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors flex items-center">
                <FiCheck className="mr-2" /> Process Started
              </button>
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center">
                <FiCheck className="mr-2" /> Process Completed
              </button>
            </div>

            {/* Documents Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Submitted Documents</h2>
              <div className="overflow-hidden border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Document Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Submitted Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {user.documents.map((doc, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {doc.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(doc.submittedDate).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {doc.verified ? (
                            <span className="inline-flex items-center text-green-600">
                              <FiCheck className="mr-1" /> Verified
                            </span>
                          ) : (
                            <span className="inline-flex items-center text-yellow-600">
                              <FiX className="mr-1" /> Pending
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-4">
                            {doc.fileUrl && (
                              <a 
                                href={doc.fileUrl} 
                                download
                                className="p-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition-colors"
                                title="Download Document"
                              >
                                <FiDownload className="h-5 w-5" />
                              </a>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;