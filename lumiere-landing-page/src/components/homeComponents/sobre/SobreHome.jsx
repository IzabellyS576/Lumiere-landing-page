import { useNavigate } from "react-router-dom";
import styles from "./SobreHome.module.css";
import NavButton from "../../navButton/Button";

function SobreHome() {
  const navigate = useNavigate();
  const goToSobre = () => {
    navigate("/sobre");
  };
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className="section_title">Sobre nós</h2>
        <p>
          Na <b>Lumière</b>, unimos luz e fragrância para transformar ambientes.
          Inspirados por “a arte da perfumaria, moldada em luz”, criamos velas
          aromáticas que despertam sensações e elevam momentos.
        </p>
        <p>
          Trabalhamos apenas com materiais premium, fragrâncias finas e um
          processo artesanal que garante queima limpa e uniforme. Cada vela é
          pensada nos detalhes — do design ao aroma — para oferecer uma
          experiência sensorial única.
        </p>
        <p>
          <strong>Lumière: fragrâncias que iluminam.</strong>
        </p>
        <NavButton
          style="sobre_home"
          onClick={goToSobre}
          text="Ver benefícios"
        />
      </div>
      <img src="/imgsHome/sobre-nos-candles.png" alt="Coleção de velas"></img>
    </section>
  );
}

export default SobreHome;
