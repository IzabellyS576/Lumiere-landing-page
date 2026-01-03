import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Contato(){
    const [name,setName] = useState();
    return(
        <>
            <Header title='Contato' subtitle='Conte conosco para tornar sua experiência ainda melhor' />
            <form action='/dogs/'>
                <h3>Conecte-se</h3>
                <h4>Estamos à disposição para esclarecer suas dúvidas</h4>
                <input type="text" value={name} placeholder="Nome" required onSubmit={(e)=>{setName(e.target.value); e.preventDefault()}}></input>
                <input type='email' placeholder="Email"></input>
                <input type="text" placeholder="Mensagem"></input>
                <button type="submit"  onSubmit={(e)=>{e.preventDefault()}}>Enviar</button>
            </form>
            {console.log(name)}
            <Footer />
        </>
    );
}

export default Contato