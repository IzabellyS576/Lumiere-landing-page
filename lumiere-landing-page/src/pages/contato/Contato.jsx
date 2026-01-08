import { motion } from 'motion/react'
import TextareaAutosize from "react-textarea-autosize"
import Swal from 'sweetalert2'

import Header from "../../components/header/Header";
import styles from "./Contato.module.css"

function Contato(){
    
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "7f405ec1-6bf4-40ac-9ea6-5ea572bcf0b5");

   try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
            title: "Enviado!",
            text: "Obrigado pela mensagem!",
            icon: "success",
        });
        event.target.reset(); 
      } else {
        console.log("Erro", data);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo deu errado.",
        });
      }
    } catch (error) {
      console.log("Erro de requisição", error);
      Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ocorreu um erro ao enviar.",
        });
    }
  };

    return(
        <>
            <Header title='Contato' subtitle='Conte conosco para tornar sua experiência ainda melhor' />
            <section className={styles.section}>
                <form className={styles.form} onSubmit={onSubmit} >
                    <h3>Conecte-se</h3>
                    <h4>Estamos à disposição para esclarecer suas dúvidas.</h4>
                    <div className={styles.grupo_input}>
                        <input type="text" name='nome' id="nome" placeholder=" " required ></input>
                        <label htmlFor="nome">Nome</label>
                    </div>
                    <div className={styles.grupo_input}>
                        <input type='email' name='email' id="email" placeholder=" " required ></input>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className={styles.grupo_input}>
                        <TextareaAutosize
                            id='mensagem'
                            name='mensagem'
                            placeholder=" "
                            required
                            minRows={4}
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