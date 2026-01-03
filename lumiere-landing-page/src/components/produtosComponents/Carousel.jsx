import { Navigation, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './styleCarousel.css';



function Carousel({ imgList }) {
  return(
    <>
    <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={3.5}
      navigation
      draggable
      centeredSlides
      loop={true}
      
    >
      {(imgList.map((img,index)=>(
        <SwiperSlide><img key={index} src={img}></img></SwiperSlide>
      )))}
    </Swiper>
    </>
  );
  
}
export default Carousel