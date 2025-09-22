
 
// import React from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';  
// import "../styles/styles2.css"
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import { MdHouse } from "react-icons/md";

// // Import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';
// import Link from 'next/link';

// export default function App() {
//   return (
//     <>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         className="mySwiper"
//         style={{
//           height: '60vh',  
//           width: '' // Set the height to 50% of the viewport height
//         }}
//       >
//         <SwiperSlide >
//               <Link href="/pr" className='bg-[#f1f1f1] h-full p-5 w-full flex flex-col gap-4 items-center justify-center rounded-2xl'> 
//                   {/* <span className='text-6xl text-[#c30e16]'><MdHouse/> </span>    */}     
//                   <div className='h-[80px] w-[80px]'> 
//                 <img src="house.png" className='h-[80px] w-[80px]' alt="" />
//                     </div> 
//                   <h1 className='text-2xl text-[#155da9]'>Permanent Residence</h1>   
//                   <span className='text-sm text-gray-500'>Let's make Canada your permanent home</span>
//               </Link>
//          </SwiperSlide>
//         <SwiperSlide>
//         <div className='bg-[#004774] h-full p-5 w-full flex flex-col gap-4 items-center justify-center rounded-2xl'> 
//                   {/* <span className='text-6xl text-[#c30e16]'><MdHouse/> </span>    */}     
//                   <div className='h-[80px] w-[80px]'> 
//                 <img src="visa.png" className='h-[80px] w-[80px]' alt="" />
//                     </div> 
//                   <h1 className='text-2xl text-white'>Permanent Residence</h1>   
//                   <span className='text-sm text-gray-200'>Let's make Canada your permanent home</span>
//               </div>        </SwiperSlide>
//         <SwiperSlide>
//         <div className='bg-[#f1f1f1] h-full p-5 w-full flex flex-col gap-4 items-center justify-center rounded-2xl'> 
//                   {/* <span className='text-6xl text-[#c30e16]'><MdHouse/> </span>    */}     
//                   <div className='h-[80px] w-[80px]'> 
//                 <img src="decision-making.png" className='h-[80px] w-[80px]' alt="" />
//                     </div> 
//                   <h1 className='text-2xl text-[#155da9]'>Permanent Residence</h1>   
//                   <span className='text-sm text-gray-500'>Let's make Canada your permanent home</span>
//               </div>        </SwiperSlide>
//         <SwiperSlide>
//         <div className='bg-[#004774] h-full p-5 w-full flex flex-col gap-4 items-center justify-center rounded-2xl'> 
//                   {/* <span className='text-6xl text-[#c30e16]'><MdHouse/> </span>    */}     
//                   <div className='h-[80px] w-[80px]'> 
//                   <img src="travel.png" className='h-[80px] w-[80px]' alt="" />   
//                   </div> 
//                   <h1 className='text-2xl text-white'>Permanent Residence</h1>   
//                   <span className='text-sm text-gray-200'>Let's make Canada your permanent home</span>
//               </div>            </SwiperSlide>
//         <SwiperSlide>
//         <div className='bg-[#f1f1f1] h-full p-5 w-full flex flex-col gap-4 items-center justify-center rounded-2xl'> 
//                   {/* <span className='text-6xl text-[#c30e16]'><MdHouse/> </span>    */}     
//                   <div className='h-[80px] w-[80px]'> 
//                 <img src="technician.png" className='h-[80px] w-[80px]' alt="" />

//                     </div> 
//                   <h1 className='text-2xl text-[#155da9]'>Permanent Residence</h1>   
//                   <span className='text-sm text-gray-500'>Let's make Canada your permanent home</span>
//               </div>          </SwiperSlide>
        
//       </Swiper>
//     </>
//   );
// }



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';  
import "../styles/styles2.css";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Link from 'next/link';

export default function App() {
  return (
    <div className="relative">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true, el: '.swiper-pagination' }} // Assign custom pagination element
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        style={{
          height: '60vh', // Adjust height
        }}
      >
        <SwiperSlide>
          <div className='bg-[#f1f1f1] h-full p-5 w-full flex flex-col gap-4 items-center justify-center rounded-2xl'>      
            <div className='h-[80px] w-[80px]'> 
              <img src="house.png" className='h-[80px] w-[80px]' alt="House Icon" />
            </div> 
            <h1 className='text-2xl text-[#155da9]'>Permanent Residence</h1>   
            <span className='text-sm text-gray-500'>Let&apos;s make Canada your permanent home</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='bg-[#004774] h-full p-5 w-full flex flex-col gap-4 items-center justify-center rounded-2xl'> 
            <div className='h-[80px] w-[80px]'> 
              <img src="visa.png" className='h-[80px] w-[80px]' alt="Visa Icon" />
            </div> 
            <h1 className='text-2xl text-white'>Visa Applications</h1>   
            <span className='text-sm text-gray-200'>Get your visa processed quickly</span>
          </div>        
        </SwiperSlide>

        <SwiperSlide>
          <div className='bg-[#f1f1f1] h-full p-5 w-full flex flex-col gap-4 items-center justify-center rounded-2xl'> 
            <div className='h-[80px] w-[80px]'> 
              <img src="decision-making.png" className='h-[80px] w-[80px]' alt="Decision Making Icon" />
            </div> 
            <h1 className='text-2xl text-[#155da9]'>Consultation Services</h1>   
            <span className='text-sm text-gray-500'>Expert guidance for your journey</span>
          </div>        
        </SwiperSlide>

        <SwiperSlide>
          <div className='bg-[#004774] h-full p-5 w-full flex flex-col gap-4 items-center justify-center rounded-2xl'> 
            <div className='h-[80px] w-[80px]'> 
              <img src="travel.png" className='h-[80px] w-[80px]' alt="Travel Icon" />   
            </div> 
            <h1 className='text-2xl text-white'>Travel & Immigration</h1>   
            <span className='text-sm text-gray-200'>Explore the world with ease</span>
          </div>            
        </SwiperSlide>

        <SwiperSlide>
          <div className='bg-[#f1f1f1] h-full p-5 w-full flex flex-col gap-4 items-center justify-center rounded-2xl'> 
            <div className='h-[80px] w-[80px]'> 
              <img src="technician.png" className='h-[80px] w-[80px]' alt="Technician Icon" />
            </div> 
            <h1 className='text-2xl text-[#155da9]'>Work Permits</h1>   
            <span className='text-sm text-gray-500'>Secure your work permit easily</span>
          </div>          
        </SwiperSlide>
      </Swiper>

      {/* Pagination (Visible only on mobile) */}
      <div className="swiper-pagination lg:hidden"></div>

      {/* CSS Fix for Pagination */}
      <style jsx>{`
        .swiper-pagination {
          position: relative !important;
          bottom: -20px !important;
        }
      `}</style>
    </div>
  );
}


