import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
// import {BsSearch} from "react-icons/bs"
import SearchBar from "../components/SearchBar/SearchBar"
import SearchResultList from "../components/SearchBar/SearchResultList"
import "../styles/Home.css"

function Home() {
  const [results,setResults]=useState([])
  const [services, setServices] = useState([]);


  useEffect(() => {
    
    // axios.get('http://localhost:7000/services/')
    axios.get('https://prestacao-service.onrender.com/services/')
      .then((res) => {
        console.log(res);
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
<SearchBar setResults={setResults}/>
<SearchResultList results={results}/>
      </div>

</div>

      <div className="funcionarios">

      <div className="lista-funcionario">
      {
      services.map((services,index)=>{
        return(
    
           <div className="detalhe-funcionario" key={index}>
       <div className="pesquisa">
       <div className="coluna-right">
            <h2> Id:</h2>
            <p className="id">{services.id}</p> 
            </div>

            <div className="coluna-left">
            <h2> Professional:</h2>
           <p > {services.professional}</p>
      

     </div>
     </div>
     <div className="coluna-left">
            <h2 > Name:</h2>
            <p >{services.name}</p>
            </div>
            <div className="coluna-descricao">
            <h2 >Description:</h2>
            <p className="descricao1" >{services.description}</p>
            </div>
       
            <div className="pesquisa">
            <div className="coluna-left">
            <h2 > Duration:</h2>
          
            <p >{services.duration}</p>
            </div>
            <div className="coluna-left">
            <h2 > Price:</h2>
            
            <p >{services.price}</p>
            </div>
            </div>
            <div className="coluna-left">
            <h2 > Availability:</h2>
            
            <p >{services.availability}</p>
            </div>
<div className="btn-agenda">
<button className="btn-detalhe">
              <Link to={`/${services.id}`}>Detalhe
                     </Link>
                
              </button >

<button className="btn">
              <Link to={`cadastro/${services.id}`}> Agende Seu Horário</Link>
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
export default Home;
