import { Navigation, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './carousel.css';

import styles from './cardCarousel.module.css'

function Carousel({ prodType }) {
  return(
    <>
    <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={20}
      slidesPerView={1.8}
      draggable
      navigation
      centeredSlides
      loop={true}
      breakpoints={{
          538: {
            slidesPerView: 1.4, 
            spaceBetween: 20,
          },
          600:{
            slidesPerView: 1.8,
            spaceBetween: 20
          },
          722: {
            slidesPerView: 3.2,
            spaceBetween: 20,
          },
          924: {
            slidesPerView: 3.5, 
            spaceBetween: 20,
          },
          1052: {
            slidesPerView: 3.8, 
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 4.4, 
            spaceBetween: 28,
          },
        }}
    >
      {(Object.values(prodType).map((product)=>(
        <SwiperSlide>
          <div key={product.name} className={styles.card}>
            <img src={product.img} alt={`${product.name} candle`}></img>
            <div className={styles.content}>
              <span className={styles.product_name}>{product.name}</span>
              <span className={styles.product_price}>{product.price}</span>
            </div>
          </div>
        </SwiperSlide>
      )))}
    </Swiper>
    </>
  );
  
}
export default Carousel