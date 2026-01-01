import { useNavigate } from "react-router-dom";

function Hero(){
    const navigate = useNavigate();
    const goToProdutos = () => {
        navigate('/produtos');
    }

    return(
        <div>
            <h1>Lumière</h1>
            <h2>A arte da perfumaria, moldada em luz.</h2>
            <button onClick={goToProdutos}>Descubra nossos aromas</button>
        </div>
    );
}

export default Hero