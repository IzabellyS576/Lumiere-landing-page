import { LayoutGroup, motion } from 'motion/react'
import styles from './Navbar.module.css';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const tabs = [
    {id:'home', label:'home', link:'/' },
    {id:'sobre', label:'sobre', link:'/sobre' },
    {id:'produtos', label:'produtos', link:'/produtos' },
    {id:'depoimentos', label: 'depoimentos', link:'/depoimentos' },
    {id: 'contato', label: 'contato', link:'/contato' }
];

function Navbar(){
    const location = useLocation();
    const { pathname } = location;
    const [activeTab, setActiveTab] = useState(pathname);
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        setActiveTab(pathname);
    }, [pathname]);

    return(
        <nav className={styles.navbar}>
            <div  className={styles.navbar_content}> 
                <img src='/Logo1.svg' alt='Logo escrita Lumière' className={styles.logo}></img>
                <button className={openMenu ? styles.navbar_toggle_open : styles.navbar_toggle_closed} onClick={() => {setOpenMenu(!openMenu)}}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>  
                <ul className={ openMenu ? styles.navbar_menu : styles.nav_menu_closed}>
                    {tabs.map((tab)=>(
                        <li
                        key={tab.id}
                        className={ activeTab === tab.link ? ('') : styles.hover_tab}
                        >
                        <Link className={styles.pages_link} to={tab.link}>
                            {activeTab === tab.link && (
                            <motion.div 
                            layoutId='active-pill'
                            transition={{ type:'spring', duration:'0.6', damping:'20' }}
                            className={styles.current_page}></motion.div>
                            )} <span style={{position: 'relative', zIndex:1}}></span>
                        {tab.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar
