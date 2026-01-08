import Hero from "../components/homeComponents/hero/Hero";
import ProdutosHome from "../components/homeComponents/produtos/ProdutosHome";
import SobreHome from "../components/homeComponents/sobre/SobreHome";


function Home() {
  return (
    <>
      <Hero />
      <SobreHome />
      <ProdutosHome />
    </>
  );
}

export default Home;
