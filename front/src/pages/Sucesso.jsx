import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../styles/Funcionario.css"
import Professional from "../components/professional/Professional";

function Sucesso() {
  const { id } = useParams();
  const [agenda, setAgenda] = useState([]);

  useEffect(() => {
    
    // axios.get('http://localhost:7000/services/'+ id)
    axios.get('http://127.0.0.1:5430' +id)
    .then((res) => {
        console.log(res);
        setAgenda(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div >
      <Header />
      <HelmetProvider>
        <Helmet title="Descrição das Atividades" />
      </HelmetProvider>

      <Professional/>
     <div className="class">

      <div class="titulo">Resposta Agendamento</div>          
   
      <div className="funcionario">

      <div className="center">
           <div className="pesquisa-funcionario" >
           <div className="pesquisa">
           <div className="coluna-right">
            <h2> Id:</h2>
            <p className="id">{agenda.id_cliente}</p> 
     
            </div> 


            <div className="coluna-left">
            <h5 > {agenda.nomecliente}</h5>
           <h5 > {agenda.date}</h5>
           </div> 
           </div> 
           
           <div className="coluna-left">
            <h2 > Time:</h2>
            <p>{agenda.time}</p>
            </div>
            <div className="coluna-descricao">
            <h2 >Status:</h2>
            <p className="descricao1" >{agenda.status}</p>
            </div>
           
<div className="btn-agenda">
<button class="btn">

      <Link to={``}> Editar Seu Horário</Link>
           
             </button>
             <button class="btn">

      <Link to={``}> Cancelar </Link>
           
             </button>
</div>

           </div>
            
          
        
           </div>
      </div>
      </div> 
      <Footer />
</div>

     
       );
}
export default Sucesso;
