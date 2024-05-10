// import React, { useContext, useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation , EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';

const SliderComponent = () => {

  const product = [
    {
      id:1,
      image:"https://i.postimg.cc/PJxB6Wm4/bg1.jpg",
      category:"Helping Hand For Grow Up",
      description:" suggests a supportive initiative aimed at aiding individuals in their journey of personal growth and development. This program or service could encompass mentorship"
    },
    {
      id:1,
      image:"https://i.postimg.cc/PJxB6Wm4/bg1.jpg",
      category:"Post What are You Thinking",
      description:" an invitation to share your thoughts, musings, and reflections with others in a open and supportive online space. Whether it's a random idea that popped into your head, a deep contemplation about life, or simply a moment of introspection"
    }
  ]


    return (
        <section className='h-[700px] container mx-auto '>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={'fade'}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation , EffectFade]}
        className="mySwiper"
      >
        {
           product.map( item => <SwiperSlide key={item.id} item={item} >
            <div className='w-full h-full rounded-2xl bg-no-repeat flex flex-col justify-center items-center' style={{
                background: `linear-gradient(45deg,rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url(${item.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'center'
                }}>
                    <h1 className='text-white font-medium text-2xl font-Bebas md:px-0 px-5 md:text-4xl'>{item.category}</h1>
                    <p className='md:w-[1220px] font-Montserrat md:text-xl text-gray-300 font-light mt-5'>{item.description}</p>
                    <Link to={`/house/${item.id}`} className=" mt-3 backdrop-blur-3xl relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black  bg-gray-50 rounded-full hover:text-white group ">
                        <span className="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="relative">View Details</span>
                    </Link>
            </div>
        </SwiperSlide> )
        }
      </Swiper>
        </section>
    );
};

export default SliderComponent;

