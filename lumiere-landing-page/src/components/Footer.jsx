import { useNavigate } from "react-router-dom";

function Footer(){
    const navigate = useNavigate();
    const goToHome = () => {navigate('/')};
    // const goToSobre = () => {navigate('/sobre')};
    // const goToProdutos = () => {navigate('/produtos')};
    // const goToDepoimentos = () => {navigate('/depoimentos')};
    // const goToContato = () => {navigate('/contato')};
    return(
        <div>
            <div>
                <img src='/imgsFooter/Logo2.svg' alt="Logo circular Lumière"></img>
                <span>A arte da perfumaria, moldada em luz.</span>
                <ul>
                    <li><img src="/imgsFooter/Instagram-vector.png" alt="Instagram"></img></li>
                    <li><img src="/imgsFooter/TikTok-vector.png" alt="TikTok"></img></li>
                    <li><img src="/imgsFooter/Pinterest-vector.png" alt="Pinterest"></img></li>
                </ul>
            </div>
            <div>
                <h4>Seções</h4>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                        <a href="/sobre">Sobre</a>
                        <a href="/produtos">Produtos</a>
                        <a href="/depoimentos">Depoimentos</a>
                        <a href="/contato">Contato</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4>Contato</h4>
                <p>Email: lumierestore177@gmail.com</p>
                <a>Nos envie um comentário</a>
            </div>
        </div>
    );
}

export default Footer