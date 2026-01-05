import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Carousel from "../../components/produtosComponents/Carousel";
import { produtosList } from "./produtosList";

const  { keepItClassic }= produtosList;
const { makeItFun } = produtosList;
                        


function Produtos(){
    return(
        <>
        <Header title='Produtos' subtitle='Descubra fragâncias que iluminam seus momentos.' page='Produtos'/>
        <section>
            <Carousel prodType={keepItClassic}/>
            <Carousel prodType={makeItFun} />
        </section>
        <Footer />
        </>
    );
}

export default Produtos