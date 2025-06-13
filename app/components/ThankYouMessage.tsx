// // "use client";

// // import Link from "next/link";

// // interface ThankYouMessageProps {
// //   rating: number;
// //   onClose: () => void;
// // }

// // export default function ThankYouMessage({ rating, onClose }: ThankYouMessageProps) {
// //   return (
// //     <div className="text-center py-8">
// //       <div className="text-green-500 text-5xl mb-4">✓</div>
// //       <h3 className="text-xl font-bold mb-2">Thank You!</h3>
      
// //       {rating >= 3 ? (
// //         <>
// //           <p className="text-gray-600 mb-6">We're glad you had a positive experience!</p>
// //           <div className="flex flex-col gap-3">
// //             <Link
// //               href="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="bg-[#155da9] hover:bg-[#124b8a] text-white font-medium py-2 px-4 rounded-full transition-colors duration-300"
// //             >
// //               Review Us on Google
// //             </Link>
// //             <button
// //               onClick={onClose}
// //               className="border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-full hover:bg-gray-100 transition-colors duration-300"
// //             >
// //               Maybe Later
// //             </button>
// //           </div>
// //         </>
// //       ) : (
// //         <>
// //           <p className="text-gray-600 mb-6">
// //             We're sorry to hear that. We'll try to provide you with better services next time.
// //           </p>
// //           <button
// //             onClick={onClose}
// //             className="bg-[#155da9] hover:bg-[#124b8a] text-white font-medium py-2 px-4 rounded-full transition-colors duration-300"
// //           >
// //             Close
// //           </button>
// //         </>
// //       )}
// //     </div>
// //   );
// // }




// "use client";

// interface ThankYouMessageProps {
//   rating: number;
//   onClose: () => void;
// }

// export default function ThankYouMessage({ rating, onClose }: ThankYouMessageProps) {
//   return (
//     <div className="text-center py-8">
//       <div className="text-green-500 text-5xl mb-4">✓</div>
//       <h3 className="text-xl font-bold mb-2">Thank You!</h3>

//       {rating >= 3 ? (
//         <>
//           <p className="text-gray-600 mb-6">We're glad you had a positive experience!</p>
//           <div className="flex flex-col gap-3">
//             <a
//               href="https://search.google.com/local/writereview?placeid=ChIJo616pDRHK4gRRenDAwsRCDQ"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-[#155da9] hover:bg-[#124b8a] text-white font-medium py-2 px-4 rounded-full transition-colors duration-300"
//             >
//               Review Us on Google
//             </a>
//             <button
//               onClick={onClose}
//               className="border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-full hover:bg-gray-100 transition-colors duration-300"
//             >
//               Maybe Later
//             </button>
//           </div>
//         </>
//       ) : (
//         <>
//           <p className="text-gray-600 mb-6">
//             We're sorry to hear that. We'll try to provide you with better services next time.
//           </p>
//           <button
//             onClick={onClose}
//             className="bg-[#155da9] hover:bg-[#124b8a] text-white font-medium py-2 px-4 rounded-full transition-colors duration-300"
//           >
//             Close
//           </button>
//         </>
//       )}
//     </div>
//   );
// }


"use client";

import { useState } from 'react';

interface ThankYouMessageProps {
  rating: number;
  onClose: () => void;
  userId: string; // Add userId prop
}

export default function ThankYouMessage({ rating, onClose, userId }: ThankYouMessageProps) {
  const [testimonial, setTestimonial] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitTestimonial = async () => {
    if (!testimonial.trim()) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rating,
          testimonial,
          userId
        }),
      });

      if (!response.ok) throw new Error('Failed to submit feedback');
      
      onClose();
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-center py-8">
      <div className="text-green-500 text-5xl mb-4">✓</div>
      <h3 className="text-xl font-bold mb-2">Thank You!</h3>

      {rating >= 3 ? (
        <>
          <p className="text-gray-600 mb-6">We're glad you had a positive experience!</p>
          
          <div className="mb-4">
            <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-2">
              Would you like to share your experience?
            </label>
            <textarea
              id="testimonial"
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your feedback helps us improve..."
              value={testimonial}
              onChange={(e) => setTestimonial(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={handleSubmitTestimonial}
              disabled={isSubmitting || !testimonial.trim()}
              className="bg-[#155da9] hover:bg-[#124b8a] text-white font-medium py-2 px-4 rounded-full transition-colors duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
            </button>
            
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJo616pDRHK4gRRenDAwsRCDQ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-full transition-colors duration-300"
            >
              Review Us on Google
            </a>
            
            <button
              onClick={onClose}
              className="border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              Maybe Later
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="text-gray-600 mb-6">
            We're sorry to hear that. We'll try to provide you with better services next time.
          </p>
          <div className="mb-4">
            <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-2">
              What could we improve?
            </label>
            <textarea
              id="testimonial"
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your feedback helps us improve..."
              value={testimonial}
              onChange={(e) => setTestimonial(e.target.value)}
            />
          </div>
          <button
            onClick={handleSubmitTestimonial}
            disabled={isSubmitting}
            className="bg-[#155da9] hover:bg-[#124b8a] text-white font-medium py-2 px-4 rounded-full transition-colors duration-300 disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </button>
        </>
      )}
    </div>
  );
}