
"use client";

import { FiArrowLeft, FiChevronRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, use } from "react";
import Navbar from "@/app/components/Navbar";
import Navbar2 from "@/app/components/Navbar2";

interface User {
  id: string;
  name: string;
  email: string;
  nationality: string;
  status: "pending" | "done";
}

interface UserForm {
  _id: string;
  applicationId: string;
  userId: string;
  overall: null | any;
  additionalQuestions: {
    criminalRecord: boolean;
    previousVisaRefusal: boolean;
    medicalIssues: boolean;
  };
  uciNumber: string;
  educationHistory: any[];
  workHistory: any[];
}

const UserDetailsPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [forms, setForms] = useState<UserForm[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { id: userId } = use(params);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch user data
        const userResponse = await fetch(`/api/users/open-user/${userId}`);
        if (!userResponse.ok) throw new Error("Failed to fetch user data");
        const userData = await userResponse.json();
        setUser(userData);

        // Fetch user forms
        const formsResponse = await fetch(`/api/users/user_forms/${userId}`);
        if (!formsResponse.ok) throw new Error("Failed to fetch user forms");
        const formsData = await formsResponse.json();
        setForms(formsData);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  const handleViewDetails = (applicationId: string) => {
    router.push(`/admin/user/${userId}/user-form-details/${applicationId}`);
    // Note: You'll need to create a new page/component for /user-form-details
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

  if (!user) {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar2 />

      <div className="absolute top-[110px] left-4 z-10">
        <button
          onClick={() => router.back()}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <FiArrowLeft className="mr-2" /> Back to Users
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-[160px] pb-8">
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          {/* User Information Card */}
          <div className="bg-gradient-to-r from-[#c30e16] to-[#155da9] p-6 text-white">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 h-16 w-16 rounded-full bg-blue-300 flex items-center justify-center text-2xl font-bold text-blue-800">
                {user.name.charAt(0)}
              </div>
              <div>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-blue-100">{user.email}</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Nationality</p>
                <p className="font-medium text-gray-900">{user.nationality}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Account Status</p>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    user.status === "done" ? "bg-green-100 text-green-800" : "bg-red-100 text-black"
                  }`}
                >
                  {user.status}
                </span>
              </div>
            </div>
          </div>

          {/* User Forms Section */}
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Applications</h2>
            {forms.length === 0 ? (
              <div className="bg-gray-50 p-4 rounded-lg text-center text-gray-500">
                No forms found for this user
              </div>
            ) : (
              <div className="grid gap-4">
                {forms.map((form) => (
                  <div
                    key={form._id}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex justify-between items-center"
                  >
                    <div>
                      <p className="text-lg font-medium text-gray-900">
                        Application ID: {form.applicationId}
                      </p>
                    </div>
                    <button
                      onClick={() => handleViewDetails(form.applicationId)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
                    >
                      Details <FiChevronRight className="ml-2" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;