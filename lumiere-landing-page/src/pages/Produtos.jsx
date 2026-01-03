import Footer from "../components/Footer";
import Header from "../components/Header";
import Carousel from "../components/produtosComponents/Carousel";

const keepItClassicImgs = ['/imgsProdutos/lavender-n-rosemary-candle.png',
                          '/imgsProdutos/sandalwood-n-vanilla-candle.png',
                          '/imgsProdutos/rose-n-vanilla-candle.png',
                          '/imgsProdutos/santal-n-fig-candle.png',
                          '/imgsProdutos/orange-n-clove-candle.png',
                          '/imgsProdutos/sandalwood-n-bergamot-candle.png'
                        ];
const makeItFunImgs = ['/imgsProdutos/fig-leaves-candle.png',
                          '/imgsProdutos/cherry-blossom-candle.png',
                          '/imgsProdutos/spearmint-candle.png',
                          '/imgsProdutos/coffee-n-orange-candle.png',
                          '/imgsProdutos/coastal-mist-candle.png',
                          '/imgsProdutos/black-amber-n-orchid-candle.png'
                        ];

function Produtos(){
    return(
        <>
        <Header title='Produtos' subtitle='Descubra fragâncias que iluminam seus momentos.'/>
        <section>
            <Carousel imgList={keepItClassicImgs}/>
            <Carousel imgList={makeItFunImgs} />
        </section>
        <Footer />
        </>
    );
}

export default Produtos