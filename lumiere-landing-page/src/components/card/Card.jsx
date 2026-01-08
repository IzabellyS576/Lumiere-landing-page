import { AnimatePresence, motion } from 'motion/react'
import styles from '../../components/card/Card.module.css';
import { useState } from 'react';

function ExpandableText({ text }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 200;

  if (text.length <= maxLength) return <div className={styles.content_not_expanded}><p>{text}</p></div>;

  return (
    <div 
    className={styles.content_expandable}>
      <p>
        {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      </p>

      <motion.button
      layout
      whileHover={{ scale: 1.02, y:-1 }}
      transition={{type:'spring', duration: 0.2}}
        onClick={() => setIsExpanded(!isExpanded)} //toggle
        className={styles.toggle_btn}
      >
        <img src={isExpanded ? '/imgsDepoimentos/arrow-up-vector.svg' : '/imgsDepoimentos/arrow-down-vector.svg'}
        alt = {isExpanded ? 'mostrar menos' : 'mostrar mais'}></img>
      </motion.button>
    </div>
  );
}

function Card( {title, text, img, style} ){

    function pickStyle(style){
        if (style==='sobre_wide') return styles.sobre_wide;
        if (style==='sobre_small') return styles.sobre_small;
        if (style==='depoimentos') return styles.depoimentos;
        return '';
    }
    
    return(
        <div className={pickStyle(style)}>
            <div className={styles.content}>
                <h3>{title}</h3>
                {style === 'depoimentos' ? (
                    <ExpandableText text={text} />
                    ) : (
                    <div><p>{text}</p></div>)}
            </div>
            <img src={img}></img>
        </div>
    );
}

export default Card