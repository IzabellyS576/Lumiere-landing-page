import styles from '../../components/card/Card.module.css';

function Card( {title, text, img, style} ){

function pickStyle(style){
    if (style==='sobre_wide') return styles.sobre_wide;
    if (style==='sobre_small') return styles.sobre_small;
    if (style==='depoimentos') return styles.depoimentos;
}

    return(
        <div className={pickStyle(style)}>
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <img src={img}></img>
        </div>
    );
}

export default Card