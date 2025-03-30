'use client'

import { FiArrowLeft, FiCheck } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Navbar from '@/app/components/Navbar';

interface User {
  id: string;
  name: string;
  email: string;
  nationality: string;
  status: 'pending' | 'done'
}

const UserDetailsPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function fetchUser() {
      try {
        const resolvedParams = await params;
        const response = await fetch(`/api/users/open-user/${resolvedParams.id}`);
         
        console.log(response)
        
        if (!response.ok) throw new Error('Failed to fetch user data');

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [params]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-600">{error}</div>;

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
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#c30e16] to-[#155da9] p-6 text-white">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-16 w-16 rounded-full bg-blue-300 flex items-center justify-center text-2xl font-bold text-blue-800">
                {user?.name.charAt(0)}
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold">{user?.name}</h1>
                <p className="text-blue-100">{user?.email}</p>
              </div>
            </div>
          </div>

          <div className="p-6 mt-4">
            <div className="grid grid-cols-1 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Basic Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-medium">{user?.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Address</p>
                    <p className="font-medium">{user?.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Nationality</p>
                    <p className="font-medium">{user?.nationality}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Account Status</p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user?.status === 'done' ? 'bg-green-100 text-green-800' :
                      user?.status === 'pending' ? 'bg-red-100 text-black' :
                      'bg-yellow-300 text-black'
                    }`}>
                      {(user?.status ?? '').charAt(0).toUpperCase() + (user?.status ?? '').slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
