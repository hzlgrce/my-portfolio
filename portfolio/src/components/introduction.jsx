import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; 
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

const Introduction = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center"> 
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="w-full h-full"
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div className="w-full h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-gray-800 mb-8">
              Hello! I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Hazel</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-2xl">
              I'm passionate about programming systems and creating elegant solutions.
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="w-full h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-gray-800 mb-8">
              Welcome to my <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-2xl">
              Explore my projects and achievements.
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="w-full h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-gray-800 mb-8">
              Let's <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Collaborate</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-2xl">
              Feel free to reach out for exciting opportunities.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Introduction;
