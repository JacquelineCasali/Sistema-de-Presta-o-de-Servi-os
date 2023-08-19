import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../styles/Funcionario.css"
import Professional from "../components/professional/Professional"
function Funcionario() {
  const { id } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    
    // axios.get('http://localhost:7000/services/'+ id)
    axios.get('https://prestacao-service.onrender.com/services/'+id)
    .then((res) => {
        // console.log(res);
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

      <div className="titulo">Serviços e Funcionários</div>          
   
      <div className="funcionario">
      
      <div className="center">
      <Professional/>
        
           {/* <div className="pesquisa-funcionario" >
            <h2 > Professional:</h2>
            <p>{services.professional}</p>
       
            <h2 > Availability:</h2>
            
            <p >{services.availability}</p>
          */}
<div className="btn-agenda">
<button className="btn">

      <Link to={`/${services.id}`}> Agende Seu Horário</Link>
           
             </button>
</div>

           </div>
            
          
        
           </div>
      </div>
      {/* </div>  */}
      <Footer />
</div>

     
       );
}
export default Funcionario;
