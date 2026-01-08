import { motion } from 'motion/react'
import styles from './Navbar.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const tabs = [
    {id:'home', label:'home', link:'/' },
    {id:'sobre', label:'sobre', link:'/sobre' },
    {id:'produtos', label:'produtos', link:'/produtos' },
    {id:'depoimentos', label: 'depoimentos', link:'/depoimentos' },
    {id: 'contato', label: 'contato', link:'/contato' }
];

function Navbar(){
    
    let [activeTab, setActiveTab] = useState(tabs[0].id);

    return(
        <div className={styles.navbar}>
            <ul>
                {tabs.map((tab)=>(
                    <li
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={ activeTab === tab.id && ('')}
                    >
                    <Link className={styles.pages_link} to={tab.link}>
                        {activeTab === tab.id && (
                        <motion.div 
                        layoutId='active-pill'
                        transition={{ type:'spring', duration:'0.6', damping:'20' }}
                        className={styles.current_page}></motion.div>
                        )}
                    {tab.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navbar
