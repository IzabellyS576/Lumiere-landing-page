import './NavButton.css'
import { LayoutGroup, motion } from 'motion/react'
function NavButton({style, text, onClick}){
    
    return(
        <LayoutGroup>
        <motion.button
        whileHover={{ scale: 1.05, y:-2 }}
        whileTap={{ scale: 0.9, y:1 }}
        transition={{ type: 'spring' }}
        className={`${style} all_btns`} onClick={onClick} > {text} </motion.button>
        </LayoutGroup>
    );
}

export default NavButton