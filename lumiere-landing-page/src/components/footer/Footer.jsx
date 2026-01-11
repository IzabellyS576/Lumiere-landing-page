import { Link } from 'react-router-dom';
import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles.section}>
            <div className={styles.brand_display}>
                <img src='/imgsFooter/Logo2.svg' alt="Logo circular Lumière" className={styles.logo}></img>
                <div className={styles.brand_display_content}>
                    <span>A arte da perfumaria, moldada em luz.</span>
                    <ul className={styles.socials_display}>
                        <li><a href='https://www.instagram.com/' target='_blank'><img src="/imgsFooter/Instagram-vector.svg" alt="Instagram" className={styles.socials}></img></a></li>
                        <li><a href='https://www.tiktok.com/' target='_blank'><img src="/imgsFooter/TikTok-vector.svg" alt="TikTok" className={styles.socials}></img></a></li>
                        <li><a href='https://br.pinterest.com/' target='_blank'><img src="/imgsFooter/Pinterest-vector.svg" alt="Pinterest" className={styles.socials}></img></a></li>
                    </ul>
                </div>
            </div>
            <nav className={styles.navigation}>
            <div className={styles.secoes}>
                <h4>Seções</h4>
                <ul>
                    <li>
                        <Link className={styles.link} to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link className={styles.link} to={'/sobre'}>Sobre</Link>
                    </li>
                    <li>
                        <Link className={styles.link} to={'/produtos'}>Produtos</Link>
                    </li>
                    <li>
                        <Link className={styles.link} to={'/depoimentos'}>Depoimentos</Link>
                    </li>
                    <li>
                        <Link className={styles.link} to={'/contato'}>Contato</Link>
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
                        <Link className={styles.link} to={'/contato'}>Entre em contato</Link>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
    );
}

export default Footer