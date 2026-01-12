import Hero from "../../components/homeComponents/hero/Hero";
import ProdutosHome from "../../components/homeComponents/produtos/ProdutosHome";
import SobreHome from "../../components/homeComponents/sobre/SobreHome";
import styles from "./Home.module.css"


function Home() {
  return (
    <>
      <Hero />
      <div className={styles.section}>
        <SobreHome />
        <ProdutosHome />
      </div>
    </>
  );
}

export default Home;
