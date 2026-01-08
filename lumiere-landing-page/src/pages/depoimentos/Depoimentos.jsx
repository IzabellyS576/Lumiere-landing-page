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
        {Object.values( depoimentosContent ).map((depoimento)=>(
          <Card 
            key={depoimento.nome}
            title={depoimento.nome}
            text={depoimento.texto}
            img={depoimento.foto}
            style='depoimentos'
          />
        ))}
      </div>
    </>
  );
}

export default Depoimentos;
