
 
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';  
import "../styles/styles2.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { MdHouse } from "react-icons/md";

// Import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
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
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        style={{
          height: '60vh',  
          width: '' // Set the height to 50% of the viewport height
        }}
      >
        <SwiperSlide >
              <div className='bg-[#f1f1f1] h-full p-5 w-full flex flex-col gap-4 items-center justify-center rounded-2xl'> 
                  {/* <span className='text-6xl text-[#c30e16]'><MdHouse/> </span>    */}     
                  <div className='h-[80px] w-[80px]'> 
                <img src="house.png" className='h-[80px] w-[80px]' alt="" />
                    </div> 
                  <h1 className='text-2xl text-[#155da9]'>Permanent Residence</h1>   
                  <span className='text-sm text-gray-500'>Let's make Canada your permanent home</span>
              </div>
         </SwiperSlide>
        <SwiperSlide>
        <div className='bg-[#004774] h-full p-5 w-full flex flex-col gap-4 items-center justify-center rounded-2xl'> 
                  {/* <span className='text-6xl text-[#c30e16]'><MdHouse/> </span>    */}     
                  <div className='h-[80px] w-[80px]'> 
                <img src="visa.png" className='h-[80px] w-[80px]' alt="" />
                    </div> 
                  <h1 className='text-2xl text-white'>Permanent Residence</h1>   
                  <span className='text-sm text-gray-200'>Let's make Canada your permanent home</span>
              </div>        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-[#f1f1f1] h-full p-5 w-full flex flex-col gap-4 items-center justify-center rounded-2xl'> 
                  {/* <span className='text-6xl text-[#c30e16]'><MdHouse/> </span>    */}     
                  <div className='h-[80px] w-[80px]'> 
                <img src="decision-making.png" className='h-[80px] w-[80px]' alt="" />
                    </div> 
                  <h1 className='text-2xl text-[#155da9]'>Permanent Residence</h1>   
                  <span className='text-sm text-gray-500'>Let's make Canada your permanent home</span>
              </div>        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-[#004774] h-full p-5 w-full flex flex-col gap-4 items-center justify-center rounded-2xl'> 
                  {/* <span className='text-6xl text-[#c30e16]'><MdHouse/> </span>    */}     
                  <div className='h-[80px] w-[80px]'> 
                  <img src="travel.png" className='h-[80px] w-[80px]' alt="" />   
                  </div> 
                  <h1 className='text-2xl text-white'>Permanent Residence</h1>   
                  <span className='text-sm text-gray-200'>Let's make Canada your permanent home</span>
              </div>            </SwiperSlide>
        <SwiperSlide>
        <div className='bg-[#f1f1f1] h-full p-5 w-full flex flex-col gap-4 items-center justify-center rounded-2xl'> 
                  {/* <span className='text-6xl text-[#c30e16]'><MdHouse/> </span>    */}     
                  <div className='h-[80px] w-[80px]'> 
                <img src="technician.png" className='h-[80px] w-[80px]' alt="" />

                    </div> 
                  <h1 className='text-2xl text-[#155da9]'>Permanent Residence</h1>   
                  <span className='text-sm text-gray-500'>Let's make Canada your permanent home</span>
              </div>          </SwiperSlide>
        
      </Swiper>
    </>
  );
}
