
import React ,{useState ,useEffect}  from 'react'
import axios from "axios"
import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../styles/Agenda.css"
import {useNavigate,useParams } from "react-router-dom";

export default function Resumo() {
const navigate = useNavigate();



   //  importando do banco
   const { id } = useParams();
   const [cliente, setClientes] = useState([]);


   useEffect(() => {
    axios
      .get("http://127.0.0.1:5430/" + id)

      .then((res) => {
        console.log(res);
        setClientes(res.data[0]);
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
  
    <div className="titulo">Clientes</div>          
 

    <div className="funcionarios">
    
    <div className="center">
    <div className="pesquisa-funcionario">
    
  
    
  
       
     <div className="pesquisa">

          <h2> Id:</h2>
          <p >{cliente.service_id}</p> 
         

          <div className="coluna-left">
          <h2> Name do Cliente:</h2>
         <p > {cliente.nomecliente}</p>
    

   </div>
   </div>
   <div className="coluna-left">
          <h2 > Name:</h2>
          <p >{cliente.telephone}</p>
          </div>
         
          <p >{cliente.date}</p>
          
          {/* <p key={} >{cliente.time}</p> */}
          {/* <p>{timestamp.toString()}</p> */}

          <button className="btn"
            //  onClick={() => cancelar(cliente.id)}>
      onClick={(e)=>( navigate(`/`))}>
      Cancelar
             </button>

         </div>
      

         
        
         </div>

    </div>
    
    </div> 
    <Footer />
</div>

)}
