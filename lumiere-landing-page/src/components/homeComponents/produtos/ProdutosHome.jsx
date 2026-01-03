import { useNavigate } from "react-router-dom";

function ProdutosHome(){
    const navigation = useNavigate();
    const goToProdutos = () => {
        navigation('/produtos');
    }
    return(
        <div>
            <h2>Produtos</h2>
            <div>
                <img src="/imgsHome/best-seller-sticker.svg" alt='Sticker best seller'></img>
                <img src='/imgsHome/cherry-blossom-candle.png' alt='Vela Cherry Blossom'></img>
                <h3>Cherry Blossom</h3>
                <span>R$ 60,00</span>
            </div>
            <div>
                <img src='/imgsHome/santal-n-fig-candle.png' alt='Vela Santal n&apos; Fig'></img>
                <h3>Cherry Blossom</h3>
                <span>R$ 70,00</span>
            </div>
            <div>
                <img src='/imgsHome/spearmint-candle.png' alt='Vela Spearmint'></img>
                <h3>Cherry Blossom</h3>
                <span>R$ 65,00</span>
            </div>
            <button onClick={goToProdutos} >Ver mais</button>
        </div>
    );
}

export default ProdutosHome