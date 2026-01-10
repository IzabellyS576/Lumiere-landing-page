import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/sobre/Sobre";
import Produtos from "./pages/produtos/Produtos";
import Depoimentos from "./pages/depoimentos/Depoimentos";
import Contato from "./pages/contato/Contato";
import './App.css'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/depoimentos" element={<Depoimentos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
