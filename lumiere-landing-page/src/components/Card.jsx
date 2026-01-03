function Card( {title, text, img} ){
    return(
        <div>
            <h3>{title}</h3>
            <p>{text}</p>
            <img src={img}></img>
        </div>
    );
}

export default Card