import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
// import {BsSearch} from "react-icons/bs"
import "../../styles/Home.css"

function Sucesso() {
  const { id } = useParams();
  const [agendado, setAgendado] = useState([]);


  useEffect(() => {
    
   axios.get('http://127.0.0.1:5430/'+id)
      .then((res) => {
        console.log(res);
        setAgendado(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
//  busca 
  return (
    <div >
      <Header />
      <HelmetProvider>
        <Helmet title="Descrição das Atividades" />
      </HelmetProvider>
      <div className="class">  
      <div className="test">
      <div className="titulo">Serviços e Funcionários</div>          
   

{/* pesquisa */}



</div>

      <div className="funcionario">

      <div className="center">
    
    
    
    
           <div className="pesquisa-funcionario">
       <div className="pesquisa">
       <div className="coluna-right">
            <h2> Id:</h2>
            <p >{agendado.id}</p> 
            </div>

            <div className="coluna-left">
            <h2> Name Cliet:</h2>
           <p > {agendado.nomecliente}</p>
   
     </div>
     </div>
     <div className="coluna-left">
            <h2 > telephone:</h2>
            <p >{agendado.telephone}</p>
            </div>
            <div className="coluna-descricao">
            <h2 >date:</h2>
            <p className="descricao1" >{agendado.date}</p>
            </div>
       
            <div className="pesquisa">
            <div className="coluna-left">
            <h2 > time:</h2>
          
            {/* <p >{services.time}</p> */}
            </div>
            <div className="coluna-left">
            <h2 > status:</h2>
            
            <p >{agendado.status}</p>
            </div>
            </div>
           
<div className="btn-agenda">
<button className="btn-detalhe">
              <Link to={`../editar/${agendado.id}`}>Editar Agendamento
                     </Link>
                
              </button >

<button className="btn">
              <Link to={`/`}> Cancelar</Link>
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
