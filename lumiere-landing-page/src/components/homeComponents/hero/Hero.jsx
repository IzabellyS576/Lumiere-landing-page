import { useNavigate } from "react-router-dom";
import styles from './Hero.module.css'

function Hero(){
    const navigate = useNavigate();
    const goToProdutos = () => {
        navigate('/produtos');
    }

    return(
        <div className={styles.hero}>
            <img className={styles.bg_img} src='/imgsHome/hero-candle.png'></img>
            <div className={styles.title_area}>
                <h1>Lumière</h1>
                <h2>A arte da perfumaria, moldada em luz.</h2>
            </div>
            <button className={styles.btn} onClick={goToProdutos}>Descubra nossos aromas</button>
        </div>
    );
}

export default Hero