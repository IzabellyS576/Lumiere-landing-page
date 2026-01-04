import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles.section}>
            <div className={styles.brand_display}>
                <img src='/imgsFooter/Logo2.svg' alt="Logo circular Lumière" className={styles.logo}></img>
                <div className={styles.brand_display_content}>
                    <span>A arte da perfumaria, moldada em luz.</span>
                    <ul>
                        <li><img src="/imgsFooter/Instagram-vector.svg" alt="Instagram" className={styles.socials}></img></li>
                        <li><img src="/imgsFooter/TikTok-vector.svg" alt="TikTok" className={styles.socials}></img></li>
                        <li><img src="/imgsFooter/Pinterest-vector.svg" alt="Pinterest" className={styles.socials}></img></li>
                    </ul>
                </div>
            </div>
            <div className={styles.secoes}>
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
            <div className={styles.contato}>
                <h4>Contato</h4>
                <ul>
                    <li>
                        <p>Email: lumierestore177@gmail.com</p>
                    </li>
                    <li>
                        <a>Nos envie um comentário</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer