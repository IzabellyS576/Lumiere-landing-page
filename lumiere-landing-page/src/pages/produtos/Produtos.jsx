import Header from "../../components/header/Header";
import Carousel from "../../components/produtosComponents/Carousel";
import { produtosList } from "./produtosList";
import styles from './Produtos.module.css'

const  { keepItClassic }= produtosList;
const { makeItFun } = produtosList;
                        


function Produtos(){
    return(
        <>
        <Header title='Produtos' subtitle='Descubra fragâncias que iluminam seus momentos.' page='Produtos'/>
        <section>
            <div className={styles.display}>
                <h3 className={`${styles.collection_name} section_title`}>Keep it classic</h3>
                <Carousel prodType={keepItClassic}/>
            </div>
            <div className={styles.display}>
                <h3 className={`${styles.collection_name} section_title`}>Make it fun</h3>
                <Carousel prodType={makeItFun} />
            </div>
        </section>
        </>
    );
}

export default Produtos