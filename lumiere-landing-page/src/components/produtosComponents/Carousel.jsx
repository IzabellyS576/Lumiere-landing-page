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
      spaceBetween={5}
      slidesPerView={4.2}
      draggable
      navigation
      centeredSlides
      loop={true}
      
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