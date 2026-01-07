import Footer from "../components/footer/Footer";
import Hero from "../components/homeComponents/hero/Hero";
import ProdutosHome from "../components/homeComponents/produtos/ProdutosHome";
import SobreHome from "../components/homeComponents/sobre/SobreHome";
import Navbar from "../components/navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SobreHome />
      <ProdutosHome />
      <Footer />
    </>
  );
}

export default Home;
