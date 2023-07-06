import React, { Component }  from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import cx from "classnames";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useAuth } from "../../contexts/auth.context";
import { useModal } from '../../contexts/modal.context';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "./info-carousel.scss"

const InfoCarousel = () => {

// const swiperOptions = {
//     loop: true,
//     spaceBetween: 20,
//     slidesPerView: 3,
//     centeredSlides: true,
//     autoplay: {
//       delay: 3000,
//       disableOnInteraction: false
//     }
//   };
//   <Swiper {...swiperOptions}>
//   <SwiperSlide>
//     <img src="image1.jpg" alt="slide 1" />
//   </SwiperSlide>
//   <SwiperSlide>
//     <img src="image2.jpg" alt="slide 2" />
//   </SwiperSlide>
//   <SwiperSlide>
//     <img src="image3.jpg" alt="slide 3" />
//   </SwiperSlide>
//   <SwiperSlide>
//     <img src="image4.jpg" alt="slide 4" />
//   </SwiperSlide>
// </Swiper>
  
  return (
    <div className="info-carousel">
      <h2 className='info-carousel__header'>Read the latest reviews from our users, just like you!</h2>
    <Swiper
    slidesPerView={"auto"}
    centeredSlides={true}
    spaceBetween={30}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    mousewheel={true}
    keyboard={true}
    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
    className="swiper-wrapper"
  >
    {[1,2,3,4,5].map(() => {
        return <SwiperSlide>
                {({ isActive }) => (
                    <div className={cx({
                        "swiper-content": true,
                        "not-active": !isActive
                    })}>
                        <div className="swiper-content__review">
                            <div className="swiper-content__review-circle">4.0</div>
                            <div className="swiper-content__review-info">
                                <label>Waitress</label>
                                <span>Stumptown Coffee</span>
                            </div>
                        </div>
                        <div className="swiper-content__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non turpis in quam ornare gravida. 
                        </div>
                        
                    </div>

                )}
            </SwiperSlide>
    })}
  </Swiper>
  </div>
)}

export default InfoCarousel