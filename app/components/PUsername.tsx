

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";
import { MdEmail, MdClose } from "react-icons/md";
import { FaFileUpload, FaClipboardCheck, FaCommentAlt, FaStar } from "react-icons/fa";
import { clearAuthSuccess, selectUser } from "@/store/authSlice";
import ThankYouMessage from "./ThankYouMessage";

interface TrackerData {
  signUp: boolean;
  submitForm: boolean;
  fillingAndSubmission: boolean;
  result: boolean;
}

interface ApplicationTracker {
  applicationId: string;
  tracker: TrackerData;
}

export default function Username() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector(selectUser);
  const userId = user?._id || "";

  const [applications, setApplications] = useState<ApplicationTracker[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [logoutError, setLogoutError] = useState<string | null>(null);

  const [showFeedback, setShowFeedback] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [testimonial, setTestimonial] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const maxWords = 100;
  const wordCount = testimonial.trim().split(/\s+/).length;

  useEffect(() => {
    const fetchApplications = async () => {
      if (!userId) return;

      try {
        const res = await axios.get(`/api/tracker/${userId}`);
        const appList = res.data?.applications || [];

        const trackerData = await Promise.all(
          appList.map(async (app: any) => {
            try {
              const trackerRes = await axios.get(`/api/tracker/${userId}/${app.applicationId}`);
              const raw = trackerRes.data?.tracker;
              const mappedTracker: TrackerData = {
                signUp: raw.signup || false,
                submitForm: raw.formFilling || false,
                fillingAndSubmission: raw.formSubmission || false,
                result: raw.submissionResult || false,
              };
              return { applicationId: app.applicationId, tracker: mappedTracker };
            } catch (err) {
              return null;
            }
          })
        );

        setApplications(trackerData.filter(Boolean) as ApplicationTracker[]);
      } catch (error) {
        console.error("Failed to fetch applications", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [userId]);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      const res = await fetch("/api/users/logout", { method: "POST" });
      if (!res.ok) throw new Error("Logout failed");

      dispatch(clearAuthSuccess());
      router.push("/home");
      router.refresh();
    } catch (err) {
      setLogoutError("Logout failed. Try again.");
    } finally {
      setIsLoggingOut(false);
    }
  };

  const handleSubmitFeedback = (e: any) => {
    e.preventDefault();
    console.log({ rating, testimonial });
    setSubmitted(true);
  };

  const handleCloseFeedback = () => {
    setShowFeedback(false);
    setSubmitted(false);
    setRating(0);
    setTestimonial("");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="bg-white w-full lg:w-80 p-6  flex flex-col items-center">
        <Image src="/signinicon.png" alt="User" width={100} height={100} className="rounded-full object-cover mb-4" />
        <h2 className="text-xl font-bold text-[#155da9] mb-1">{user?.name || "User"}</h2>
        <p className="text-sm text-gray-600 flex items-center mb-6">
          <MdEmail className="mr-2" /> {user?.email}
        </p>

        <Link
          href="/form"
          className="w-full text-center bg-[#155da9] text-white py-2 rounded-full hover:bg-[#124b8a] transition font-medium mb-3"
        >
          Start New Application
        </Link>

        <button
          onClick={() => setShowFeedback(true)}
          className="w-full flex items-center justify-center gap-2 text-[#155da9] border border-[#155da9] py-2 rounded-full hover:bg-[#155da9] hover:text-white transition font-medium mb-3"
        >
          <FaCommentAlt /> Give Feedback
        </button>

        <button
          onClick={handleLogout}
          className={`w-full text-center py-2 border border-[#c30e16] rounded-full text-[#c30e16] hover:bg-[#c30e16] hover:text-white transition font-medium ${
            isLoggingOut ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoggingOut}
        >
          {isLoggingOut ? "Logging Out..." : "Logout"}
        </button>

        {logoutError && <p className="text-center text-sm text-red-500 mt-2">{logoutError}</p>}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h3 className="text-xl font-semibold mb-4 text-[#155da9]">Your Applications</h3>

        {loading ? (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full" />
          </div>
        ) : applications.length === 0 ? (
          <p className="text-center text-gray-500">You have not submitted any applications yet.</p>
        ) : (
          <div className="space-y-5">
            {applications.map((app) => (
              <div key={app.applicationId} className="bg-white border border-gray-200 rounded-xl p-5 shadow-lg shadow-[#00000036] transition-shadow duration-500">
                <p className="text-gray-700 font-medium mb-2">
                  📄 Application ID: <span className="text-[#c30e16]">{app.applicationId}</span>
                </p>
                <div className="flex gap-3 mt-3">
                  <Link
                    href={`/viewform/${app.applicationId}`}
                    className="flex items-center gap-2 px-4 py-2 bg-[#155da9] text-white rounded-full hover:bg-[#124b8a] text-sm"
                  >
                    <FaClipboardCheck /> View Form
                  </Link>
                  <Link
                    href={`/uploaddocuments/${app.applicationId}`}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 text-sm"
                  >
                    <FaFileUpload /> Upload Documents
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Feedback Modal */}
      {showFeedback && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md p-6 z-50">
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={handleCloseFeedback}>
              <MdClose size={24} />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmitFeedback}>
                <h2 className="text-2xl font-bold text-center mb-6 text-[#155da9]">Share Your Feedback</h2>

                <div className="flex justify-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="text-3xl mx-1 focus:outline-none"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                    >
                      <FaStar className={star <= (hoverRating || rating) ? "text-yellow-400" : "text-gray-300"} />
                    </button>
                  ))}
                </div>

                <div className="mb-4">
                  <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Testimonial {wordCount > maxWords && <span className="text-red-500">({wordCount - maxWords} over limit)</span>}
                  </label>
                  <textarea
                    id="testimonial"
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#155da9]"
                    placeholder="Share your experience (max 100 words)"
                    value={testimonial}
                    onChange={(e) => setTestimonial(e.target.value)}
                    maxLength={500}
                  />
                  <p className="text-xs text-gray-500 mt-1">{wordCount} / {maxWords} words</p>
                </div>

                <button
                  type="submit"
                  disabled={rating === 0 || wordCount > maxWords}
                  className={`w-full py-3 px-4 rounded-full font-medium text-white transition duration-300 ${
                    rating === 0 || wordCount > maxWords ? "bg-gray-400 cursor-not-allowed" : "bg-[#155da9] hover:bg-[#124b8a]"
                  }`}
                >
                  Submit Feedback
                </button>
              </form>
            ) : (
              <ThankYouMessage rating={rating} onClose={handleCloseFeedback} userId={userId} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
