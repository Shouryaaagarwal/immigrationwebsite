// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// import '../styles/stylesNavigation.css';    

// // import required modules
// import { Navigation } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
//         <SwiperSlide className=''> 
//                 <div className='flex flex-col gap-6 items-center justify-center'> 
//                     <span className='text-4xl text-[#155da9]'>Harpreet Singh</span>
//                     <span className='w-[500px] text-center text-sm'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, perspiciatis. Ipsum aut esse illum repudiandae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptatem. facilis, eos itaque sit iusto!</span>   
//                     <span></span>
//                 </div>

//         </SwiperSlide>
//         <SwiperSlide><div className='flex flex-col gap-6 items-center justify-center'> 
//                     <span className='text-4xl text-[#155da9]'>Shourya Agarwal</span>
//                     <span className='w-[500px] text-center text-sm'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, perspiciatis. Ipsum aut esse illum repudiandae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptatem. facilis, eos itaque sit iusto!</span>   
//                     <span></span>
//                 </div></SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }     



'use client'

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/stylesNavigation.css';
import { Navigation } from 'swiper/modules';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface Testimonial {
  _id: string;
  name: string;
  rating: number;
  description: string;
  testimonial?: string;
  createdAt?: string;
}

const TestimonialCarousel = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/users/feedback');
        
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }

        const data = await response.json();
        
        if (data.success) {
          // Filter testimonials with rating > 3 and sort by rating (highest first)
          const filteredTestimonials = data.data
            .filter((t: Testimonial) => t.rating > 3)
            .sort((a: Testimonial, b: Testimonial) => b.rating - a.rating);
          
          setTestimonials(filteredTestimonials);
        } else {
          throw new Error(data.error || 'Failed to fetch testimonials');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load testimonials');
        console.error('Error fetching testimonials:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />);
    }

    return stars;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 text-sm sm:text-base py-10">
        {error}
      </div>
    );
  }

  if (testimonials.length === 0) {
    return (
      <div className="text-center text-gray-500 text-sm sm:text-base py-10">
        No testimonials available with rating greater than 3.
      </div>
    );
  }

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      slidesPerView={1}
      spaceBetween={20}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
      }}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial._id}>
          <div className="flex flex-col gap-4 sm:gap-6 items-center justify-center px-4 sm:px-10 py-6 sm:py-8">
            <span className="text-xl sm:text-4xl text-[#155da9] font-semibold">
              {testimonial.name}
            </span>
            <div className="flex items-center gap-2">
              {renderStars(testimonial.rating)}
              <span className="text-xs sm:text-sm text-gray-600">
                ({testimonial.rating.toFixed(1)})
              </span>
            </div>
            <span className="w-full sm:w-[500px] text-center text-xs sm:text-sm text-gray-600">
              {testimonial.testimonial || testimonial.description}
            </span>
            {testimonial.createdAt && (
              <span className="text-xs text-gray-400">
                {new Date(testimonial.createdAt).toLocaleDateString()}
              </span>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialCarousel;