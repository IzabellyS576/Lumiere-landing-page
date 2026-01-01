import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Produtos from "./pages/Produtos";
import Depoimentos from "./pages/Depoimentos";
import Contato from "./pages/Contato";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobre" element={<Sobre/>} /> 
          <Route path="/produtos" element={<Produtos/>}/>
          <Route path="/depoimentos" element={<Depoimentos/>}/>
          <Route path="/contato" element={<Contato/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
