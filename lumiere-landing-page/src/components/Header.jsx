import { motion } from "motion/react"
import Navbar from "./navbar/Navbar";
function Header({ title, subtitle }) {
  return (
    <div>
      <div>
        <motion.div initial={{opacity: 0, y: -50}} animate={{ opacity: 100, y:0 }} transition={{duration: 0.8}}>
          <img src="/Logo1.svg" alt="Logo nome Lumière"></img>
        </motion.div>
        <Navbar />
      </div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}

export default Header;
