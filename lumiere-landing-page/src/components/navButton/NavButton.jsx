import './NavButton.css'
import { motion } from 'motion/react'
function NavButton({style, text, onClick}){
    
    return(
        <motion.button
        whileHover={{ scale: 1.05, y:-2 }}
        whileTap={{ scale: 0.9, y:1 }}
        transition={{ type: 'spring' }}
        className={`${style} all_btns`} onClick={onClick} > {text} </motion.button>
    );
}

export default NavButton