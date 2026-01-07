import { useNavigate } from "react-router-dom";
import styles from "./ProdutosHome.module.css";
import NavButton from "../../navButton/NavButton";

function ProdutosHome() {
  const navigation = useNavigate();
  const goToProdutos = () => {
    navigation("/produtos");
  };
  return (
    <section className={styles.section}>
      <h2 className="section_title">Produtos</h2>
      <div className={styles.cards_display}>
        <div className={styles.card}>
          {/* <img src="/imgsHome/best-seller-sticker.svg" alt='Sticker best seller'></img> */}
          <img
            src="/imgsHome/cherry-blossom-candle.png"
            alt="Vela Cherry Blossom"
          ></img>
          <div className={styles.card_info}>
            <h3>Cherry Blossom</h3>
            <span>R$ 60,00</span>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="/imgsHome/santal-n-fig-candle.png"
            alt="Vela Santal n' Fig"
          ></img>
          <div className={styles.card_info}>
            <h3>Santal n' Fig</h3>
            <span>R$ 70,00</span>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/imgsHome/spearmint-candle.png" alt="Vela Spearmint"></img>
          <div className={styles.card_info}>
            <h3>Spearmint</h3>
            <span>R$ 65,00</span>
          </div>
        </div>
      </div>
      <NavButton style="produtos_home" onClick={goToProdutos} text="Ver mais" />
    </section>
  );
}

export default ProdutosHome;
