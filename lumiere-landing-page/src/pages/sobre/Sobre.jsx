import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import { sobreContent } from "./sobreContent";
import Footer from "../../components/footer/Footer";
import styles from './Sobre.module.css'

function Sobre() {
  const navigation = useNavigate();
  return (
    <>
      <Header
        title="Sobre nós"
        subtitle="Conheça os diferenciais das velas Lumière"
      />
      <section className={styles.section}>
        <Card
          title={sobreContent.benefit1.title}
          text={sobreContent.benefit1.text}
          img={sobreContent.benefit1.img}
          style='sobre_wide'
        />
        <div className={styles.sobre_small_div}>
          <Card
            title={sobreContent.benefit2.title}
            text={sobreContent.benefit2.text}
            img={sobreContent.benefit2.img}
            style='sobre_small'
          />
          <Card
            title={sobreContent.benefit3.title}
            text={sobreContent.benefit3.text}
            img={sobreContent.benefit3.img}
            style='sobre_small'
          />
        </div>
        <Card
          title={sobreContent.benefit4.title}
          text={sobreContent.benefit4.text}
          img={sobreContent.benefit4.img}
          style='sobre_wide'
        />
        <button className="btn"
          onClick={() => {
            navigation("/produtos");
          }}
        >
          Produtos
        </button>
      </section>
      <Footer />
    </>
  );
}

export default Sobre;
