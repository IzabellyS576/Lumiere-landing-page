import styles from './Header.module.css'

function Header({ title, subtitle, page }) {

{/*Por conta da tipografia, alguns espaçamentos precisam ser personalizados a fim de manter harmonia no design*/}
function espacamentoEspecial(page){
  if (page==='Produtos') return styles.title_produtos;
  if (page==='Depoimentos') return styles.subtitle_depoimentos;
  return styles.title_area;
}

  return (
    <section className={styles.section}>
      <div className={espacamentoEspecial(page)}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </section>
  );
}

export default Header;
