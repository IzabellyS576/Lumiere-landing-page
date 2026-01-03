import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { sobreContent } from "./sobreContent";

function Sobre() {
    const navigation = useNavigate();
  return (
    <>
      <Header
        title="Sobre nós"
        subtitle="Conheça os diferenciais das velas Lumière"
      />
      <Card title={sobreContent.benefit1.title} text={sobreContent.benefit1.text} img={sobreContent.benefit1.img}/>
      <Card title={sobreContent.benefit2.title} text={sobreContent.benefit2.text} img={sobreContent.benefit2.img}/>
      <Card title={sobreContent.benefit3.title} text={sobreContent.benefit3.text} img={sobreContent.benefit3.img}/>
      <Card title={sobreContent.benefit4.title} text={sobreContent.benefit4.text} img={sobreContent.benefit4.img}/>
      <button onClick={() => {navigation('/produtos')}}>Produtos</button>
    </>
  );
}

export default Sobre;
