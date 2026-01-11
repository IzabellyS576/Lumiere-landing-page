import { useState, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom';
import styles from './NavMenu.module.css'
import { MotionConfig, motion } from "motion/react";

const tabs = [
    {id:'home', label:'home', link:'/' },
    {id:'sobre', label:'sobre', link:'/sobre' },
    {id:'produtos', label:'produtos', link:'/produtos' },
    {id:'depoimentos', label: 'depoimentos', link:'/depoimentos' },
    {id: 'contato', label: 'contato', link:'/contato' }
];

function NavMenu(){
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation();
    const { pathname } = location;
    let [activeTab, setActiveTab] = useState(pathname);
    
    useEffect(() => {
        setActiveTab(pathname);
    }, [pathname]);

    

    return(
        <div className={styles.conjunto}>
            <MotionConfig
            transition={{duration: 0.5,
                ease: 'easeInOut'
            }}
            >
                <motion.button 
            onClick={()=>{setMenuOpen(!menuOpen)}} 
            className={styles.hamb_btn}
            animate={menuOpen ? "open" : 'closed' }
            >
            <motion.span 
            style={{
                left: "50%",
                top: "34%",
                x: '-50%',
                y: '-50%'
            }}
            className={styles.hamb_rectangle} 
            variants={{
                open: {
                    rotate: ['0deg', '0deg', '45deg'],
                    top: ['35%', '50%', '50%']
                },
                closed: {
                    rotate: ['45deg', '0deg', '0deg'],
                    top: ['50%', '50%','35%']
                }
            }}
            />
            <motion.span 
            style={{
                left: "50%",
                top: "50%",
                x: '-50%',
                y: '-50%'
            }}
            className={styles.hamb_rectangle} 
            variants={{
                open: {
                    rotate: ['0deg', '0deg', '-45deg'],
                },
                closed: {
                    rotate: ['-45deg', '0deg', '0deg'],
                }
            }}
            />
            <motion.span 
            style={{
                left: "50%",
                bottom: '34%',
                x: '-50%',
                y: '50%'
            }}
            className={styles.hamb_rectangle} 
            variants={{
                open: {
                    rotate: ['0deg', '0deg', '45deg'],
                    bottom: ['35%', '50%', '50%']
                },
                closed: {
                    rotate: ['45deg', '0deg', '0deg'],
                    bottom: ['50%', '50%','35%']
                }
            }}
            />
                </motion.button>
            </MotionConfig>
            {menuOpen && (ShowMenu(activeTab))} 
        </div>
    )
}

const ShowMenu = (activeTab) => {
    return(
        <div className={styles.show_menu}>
            <ul>
                {tabs.map((tab)=>(
                    <li key={tab.id}
                    className={ activeTab === tab.link ? (styles.current_page): ('')}
                    >
                    <Link className={styles.pages_link} to={tab.link}>
                        {tab.label}
                    </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavMenu