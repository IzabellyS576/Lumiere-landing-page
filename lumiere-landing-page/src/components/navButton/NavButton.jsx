import './NavButton.css'

function NavButton({style, text, onClick}){
    
    return(
        <button className={`${style} all_btns`} onClick={onClick} > {text} </button>
    );
}

export default NavButton