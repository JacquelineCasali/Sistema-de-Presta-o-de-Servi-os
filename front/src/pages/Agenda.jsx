import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../styles/Agenda.css"
// import "../styles/reset.css";
// import "../styles/pet.css";

function Agenda() {
  const { id } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:7000/services/'+ id)
      .then((res) => {
        console.log(res);
        setServices(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div >
      <Header />
      <HelmetProvider>
        <Helmet title="Descrição das Atividades" />
      </HelmetProvider>
     <div className="class">

      <div class="titulo">Agendamento</div>          
   
      <div className="agendamento">

      <div className="center1">
           <div className="detalhe1" >
         <div className="row" >

     
           <div className="coluna2">
            <h2> Id:</h2>
            <p className="id">{services.id}</p> 
            </div>

            <div className="coluna3">
            <h2> Professional:</h2>
           <p > {services.professional}</p>
      

     </div>
     </div>



<h2 > Name:</h2>
            <p>{services.name}</p>
            <h2 >Description:</h2>
            <p className="descricao" >{services.description}</p>
            <h2 > Duration:</h2>
            
            <p >{services.duration}</p>
            <h2 > Price:</h2>
            
            <p >{services.price}</p>
            <h2 > Availability:</h2>
            
            <p >{services.availability}</p>
  
</div>
       
<div className="btn-agenda">
<button class="btn">
              <Link to={`/agenda/${services.id}`}> Agende Seu Horário</Link>
            
           
             </button>
</div>

           </div>
            
          
        
           </div>
      </div>
   
      <Footer />
</div>

     
       );
}
export default Agenda;
