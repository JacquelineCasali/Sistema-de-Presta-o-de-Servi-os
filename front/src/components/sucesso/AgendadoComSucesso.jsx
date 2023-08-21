import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link,useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/Funcionario.css"

function AgendadoComSucesso() {
  const { id } = useParams();
  const [agenda, setAgenda] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
    .get(" https://banco-agenda.onrender.com/" + id)
   
      // .get("http://127.0.0.1:5430/" + id)

      .then((res) => {
        console.log(res);
        setAgenda(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  // // deletar
  async function deleteAgendamento(agenda) {
    await axios.delete(` https://banco-agenda.onrender.com/${agenda.id}`);


    setAgenda();
    navigate("/cancelado");
  }
  
  return (
    <div >
      <Header />
      <HelmetProvider>
        <Helmet title="Detalhe Agendamento" />
      </HelmetProvider>

      <div className="class">
<h1 className="titulo"> Agendamento Realizado com Sucesso</h1>
       
       
        <div className="funcionario">
          <div className="center ">
          <div className="pesquisa-funcionario" >
           
            <div className="coluna-right">
              <h2>Name client:</h2>
              <p > {agenda.nomecliente}</p>

               </div>
               <div className="coluna-left">
              <h2>Telephone:</h2>
              <p > {agenda.telephone}</p>

               </div>
               <div className="coluna-left">
              <h2>Date:</h2>
              <p > {agenda.date}</p>



               </div>
               <div className="coluna-left">
              <h2>Hora:</h2>
              <p > {agenda.time}</p>

               </div>
       
               <div className="btn-agenda"> 
               <button className="btn">
            
          <Link  to={`/edit/${agenda.id}`}>
            Editar
          </Link>
               </button>
       
               
               <button className="btn-detalhe" onClick={() => deleteAgendamento(agenda)}>
               Cancelar Seu Horário 
                      </button>
            
             
        
          </div>
        </div>
      </div>
      </div>
      </div>
      <section className="branco">
       
        </section>

      <Footer />
    </div>
  );
}
export default AgendadoComSucesso;












