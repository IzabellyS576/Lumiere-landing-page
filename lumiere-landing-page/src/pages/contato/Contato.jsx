import { motion } from 'motion/react'
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize"

import Header from "../../components/header/Header";
import styles from "./Contato.module.css"

function Contato(){
    const [name,setName] = useState();
    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();
    return(
        <>
            <Header title='Contato' subtitle='Conte conosco para tornar sua experiência ainda melhor' />
            <section className={styles.section}>
                <form className={styles.form}>
                    <h3>Conecte-se</h3>
                    <h4>Estamos à disposição para esclarecer suas dúvidas.</h4>
                    <div className={styles.grupo_input}>
                        <input type="text" value={name} id="nome" placeholder=" " required onSubmit={(e)=>{setName(e.target.value); e.preventDefault()}} ></input>
                        <label htmlFor="nome">Nome</label>
                    </div>
                    <div className={styles.grupo_input}>
                        <input type='email' value={email} id="email" placeholder=" " required onSubmit={(e)=>{setEmail(e.target.value); e.preventDefault()}} ></input>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className={styles.grupo_input}>
                        <TextareaAutosize
                            id='mensagem'
                            placeholder=" "
                            required
                            value={msg}
                            minRows={4}
                            onChange={(e)=>(setMsg(e.target.value))}
                            style={{overflow: "hidden", padding: '1rem'}}
                        />
                        <label htmlFor="mensagem">Mensagem</label>
                    </div>
                    <motion.button 
                    whileHover={{ scale: 1.03, y:-1 }}
                    whileTap={{ scale: 0.9, y:1 }}
                    transition={{ type: 'spring' }}
                    type="submit" className={ `${'btn'} ${styles.form_btn}` } onSubmit={(e)=>{e.preventDefault()}}>Enviar</ motion.button>
                </form>
            </section>
        </>
    );
}

export default Contato