import { Navigation, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './carousel.module.css';



function Carousel({ prodType }) {
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
      {(Object.values(prodType).map((product)=>(
        <SwiperSlide>
          <div key={product.name}>
            <img src={product.img} alt={`${product.name} candle`}></img>
            <span>{product.name}</span>
            <span>{product.price}</span>
          </div>
        </SwiperSlide>
      )))}
    </Swiper>
    </>
  );
  
}
export default Carousel