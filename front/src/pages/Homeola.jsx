import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../styles/Home.css"
// import "../styles/reset.css";
// import "../styles/pet.css";

function Home() {

  const [services, setServices] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:7000/services/')
      .then((res) => {
        console.log(res);
        setServices(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="home">
      <Header />
      <HelmetProvider>
        <Helmet title="Descrição das Atividades" />
      </HelmetProvider>
      <div class="titulo">Serviços e Funcionários</div>          
   
      <div className="funcionarios">

      <div className="lista">
      {
      services.map((services,index)=>{
        return(
    
           <div className="detalhe" key={index}>
      
           <h5 > {services.professional}</h5>
           
           <div className="lista1 ">
            <h2> Id:</h2>
            <p className="id">{services.id}</p> 
     
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
         
<div className="btn-agenda">
<button className="botao-comprar">
              <Link
                       to={`/${services.id}`}
             
         >
                       Detalhe
                     </Link>
                
              </button >

<button class="btn">
              <Link to={'/'}> Agende Seu Horário</Link>
             </button>
           
</div>

           </div>
        )  })

      }       
          
        

      </div>
      </div> 
      <Footer />
</div>
      
  );
}
export default Home;
