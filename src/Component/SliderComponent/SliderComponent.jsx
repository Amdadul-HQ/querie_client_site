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
    },
    {
      id:1,
      image:"https://i.postimg.cc/zvqWMR12/sliderbg.jpg",
      category:"Post What are You Thinking",
      description:"an invitation to share your thoughts, musings, and reflections with others in a open and supportive online space. Whether it's a random idea that popped into your head, a deep contemplation about life, or simply a moment of introspection"
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
            </div>
        </SwiperSlide> )
        }
      </Swiper>
        </section>
    );
};

export default SliderComponent;

