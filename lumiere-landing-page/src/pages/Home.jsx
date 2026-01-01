import Footer from "../components/Footer";
import Hero from "../components/homeComponents/hero/Hero";
import ProdutosHome from "../components/homeComponents/produtos/ProdutosHome";
import SobreHome from "../components/homeComponents/sobre/SobreHome";
import Navbar from "../components/Navbar";

function Home(){
    return(
        <>
        <h1>Home</h1>
        <Navbar />
        <Hero />
        <SobreHome />
        <ProdutosHome />
        <Footer />
        </>
    );
}

export default Home