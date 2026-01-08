import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import { depoimentosContent } from "./depoimentosContent";
import styles from './Depoimentos.module.css'

function Depoimentos() {
  return (
    <>
      <Header
        title="Depoimentos"
        subtitle="Vozes que refletem a nossa essência."
        page="Depoimentos"
      />
      <div className={styles.section}>
        <Card
          title={depoimentosContent.depoimento1.nome}
          text={depoimentosContent.depoimento1.texto}
          img={depoimentosContent.depoimento1.foto}
          style='depoimentos'
        />
        <Card
          title={depoimentosContent.depoimento2.nome}
          text={depoimentosContent.depoimento2.texto}
          img={depoimentosContent.depoimento2.foto}
          style='depoimentos'
        />
        <Card
          title={depoimentosContent.depoimento3.nome}
          text={depoimentosContent.depoimento3.texto}
          img={depoimentosContent.depoimento3.foto}
          style='depoimentos'
        />
        <Card
          title={depoimentosContent.depoimento4.nome}
          text={depoimentosContent.depoimento4.texto}
          img={depoimentosContent.depoimento4.foto}
          style='depoimentos'
        />
      </div>
    </>
  );
}

export default Depoimentos;
