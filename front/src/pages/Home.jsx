import React, { useEffect, useState } from "react";
// chamando o banco de dados
import axios from "axios";
// chamando titulo da pagina
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../styles/Home.css"

import Footer from "../components/footer/Footer"
import Header from  "../components/header/Header"

import * as Icon from "react-bootstrap-icons";


const Home = ()=>{
 
  //  importando do banco
  
  const [services, setServices] = useState([]);
 
  // useEffect chama a função do banco
  useEffect(() => {
  //  axios.get('http://localhost:7000/services')
 axios.get('https://prestacao-service.onrender.com/services')
 
   .then(res=>setServices(res.data))
   .catch(err=>console.log(err))
  }, []);
  
  return(
    <div className="home">
    <Header />
    <HelmetProvider>
      <Helmet title="Lista de Serviços" />
    </HelmetProvider>

    <section>
      <h1 className="titulo">Lista de Serviços</h1>

{/* pesquisa */}
<div className="pesquisa">
<input
            className="input-padrao"
            type="text"
             placeholder="Pesquise aqui "
            required
          />
         
         
                <button className="btn">
         
         
              <Link    to={`/${services.id}`}
                    
         >
                       Pesquisa
                     </Link>
                
              </button >


</div>

        <table>
          <thead>
            <tr>
              {/* <th>Id</th> */}
              <th>id</th>
              
              <th className="nome">Name</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Price</th>
              <th>Professional</th>
              <th>Availability</th>
         
              <th  style={{padding:'0 15px 0 85px'}} >Ação</th>   
            </tr>
          </thead>

          {
          services.map((services, index) => {
            return (
            
    
              <tr className="linha" key={index}  >
     <td className="id" >
        
                    {services.id}
                  </td>
                  <td >
                    {services.name}
                  </td>
  
                 
              <td>{services.description}</td>
              <td>{services.duration}</td>
         
              <td>
                {services.price}</td>
              <td>{services.professional}</td>
              <td>{services.availability}</td>
        
  
              <td  style={{width:"5%"}}>
              <button className="botao-comprar">
              <Link
                       to={`/${services.id}`}
                    
         >
                       Detalhe
                     </Link>
                
              </button >
                   <button className="botao-vender" > 
                   <Link
                       to={`/agenda/${services.id}`}
                       
                    >
                       Agendar
                     </Link>
                
                   </button>
                   
 </td> 
                </tr>
             
            )
          })}
        </table>
    
    </section>
    {/* <section className="final"></section> */}
    <Footer />
  </div>
);
}

 
export default Home