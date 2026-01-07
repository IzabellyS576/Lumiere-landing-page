import styles from './Navbar.module.css';
function Navbar(){
    return(
        <div className={styles.navbar}>
           <a className={`${styles.pages_link} ${styles.current_page}`} href="/">Home</a>
           <a className={styles.pages_link}  href="/sobre">Sobre</a>
           <a className={styles.pages_link}  href="/produtos">Produtos</a>
           <a className={styles.pages_link}  href="/depoimentos">Depoimentos</a>
           <a className={styles.pages_link}  href="/contato">Contato</a>
        </div>
    );
}

export default Navbar