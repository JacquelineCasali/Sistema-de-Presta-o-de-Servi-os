import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import SearchProfessional from "../components/SearchProfessional/SearchProfessional"
import SearchResultList from "../components/SearchProfessional/SearchResultList"
// import "../styles/Home.css"


function FuncionarioseDisponibilidade() {
  const [results,setResults]=useState([])
  const [services, setServices] = useState([]);


  useEffect(() => {
    
    // axios.get('http://localhost:7000/services/')
    axios.get('https://prestacao-service.onrender.com/services/')
      .then((res) => {
        // console.log(res);
        setServices(res.data);
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

<div className='pesquisa-bar'>
<SearchProfessional setResults={setResults}/>
<SearchResultList results={results}/>
      </div>

</div>

      <div className="funcionarios">

      <div className="lista-funcionario">
      {
      services.map((services,index)=>{
        return(
    
           <div className="detalhe-funcionario" 
           
         key={index}>
   
       
            <div className="coluna-left" >
            <h2> Professional:</h2>
           <p > {services.professional}</p>
      

     </div>
    
     
            <div className="coluna-left">
            <h2 > Availability:</h2>
            
            <p >{services.availability}</p>
            </div>
<div className="btn-agenda">
<button className="btn-detalhe">
              <Link to={`../servicoseFuncionarios/${services.id}`}>Detalhe do Serviço
                     </Link>
                
              </button >

<button className="btn">
              <Link to={`/${services.id}`}> Agende Seu Horário</Link>
             </button>
           
</div>

           </div>
        )  })

      }       
          
        

      </div>
      </div> 
      </div> 
      <Footer />
</div>
      
  );
}
export default FuncionarioseDisponibilidade;
