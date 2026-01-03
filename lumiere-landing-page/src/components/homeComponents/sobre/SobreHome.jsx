import { useNavigate } from "react-router-dom";

function SobreHome(){
    const navigate = useNavigate();
    const goToSobre = () => {
        navigate('/sobre');
    }
    return(
        <div>
            <h2>Sobre nós</h2>
            <p>Na Lumière, unimos luz e fragrância para transformar ambientes. Inspirados por “a arte da perfumaria, moldada em luz”, criamos velas aromáticas que despertam sensações e elevam momentos.</p>
            <p>Trabalhamos apenas com materiais premium, fragrâncias finas e um processo artesanal que garante queima limpa e uniforme. Cada vela é pensada nos detalhes — do design ao aroma — para oferecer uma experiência sensorial única.</p>
            <p>Lumière: fragrâncias que iluminam.</p>
            <button onClick={goToSobre}>Ver benefícios</button>
            <img src='/imgsHome/sobre-nos-candles.png' alt='Coleção de velas'></img>
        </div>
    );
}

export default SobreHome