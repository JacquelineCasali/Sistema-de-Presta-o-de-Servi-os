// import React from "react";
import { useState, useEffect } from "react";
// // importando o titulo
import { Helmet, HelmetProvider } from "react-helmet-async";
// // qual link ele vai chamar
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/Page.css"
import "../../styles/Home.css"
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchCliente from "../../components/SearchCliente/SearchCliente"

import SearchResultList from "../../components/SearchCliente/SearchResultList"


function Lista() {
  const [results,setResults]=useState([])

  async function getTodos() {
    // axios banco de dados
    const response = await axios.get("https://banco-agenda.onrender.com/");
    // const response = await axios.get("http://127.0.0.1:5430/");
    setTodos(response.data);
    console.log(response.data);
  }
  // deletar
  async function deleteAgendamento(agendas) {
    await axios.delete(`https://banco-agenda.onrender.com/${agendas.id}`);
    getTodos();
  }
  //  importando do banco
  const [todos, setTodos] = useState([]);
  // useEffect chama a função do banco
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div >
      <Header />
      <HelmetProvider>
        <Helmet title="Agendamentos" />
      </HelmetProvider>
     
      <div className="test">   
     
      <h1 className="titulo">Agendamentos</h1>
      <div className='pesquisa-bar'>
<SearchCliente setResults={setResults}/>
<SearchResultList results={results}/>
      </div>
      </div>
      <section>
      
     {/* pesquisa */}


          <table>
            <thead>
              <tr className="test1">
                {/* <th>Id</th> */}
                <th>Id</th>
                <th className="nome">Name client</th>
                <th>Telephone</th>
                <th>Date</th>
                <th>Time</th>
                 <th  style={{padding:'0 15px 0 85px'}}></th>
              </tr>
            </thead>
            <tbody>
            {todos.map((agendas, index) => {
              return (
              
                  <tr className="linha" key={index} >
                      <td data-title="id">
                      {agendas.id}
                    </td>
                    <td style={{width:"20%" }}data-title="nomecliente">
                      {agendas.nomecliente}
                    </td>
                    <td  data-title="telephone">
                      {agendas.telephone}
                    </td>
                    <td  data-title="date">
                      {agendas.date}
                    </td>
                    <td></td>
                    <td  data-title="date">
                      {agendas.time}
                    </td>
                  <td >
                      <Link to={`../${agendas.id}`}>
                        <Icon.Book
                          color="black"
                          size={40}
                          cursor="pointer"
                          className="icone"
                        />
                      </Link>

                      <Link to={`/edit/${agendas.id}`}>
                        <Icon.Pencil
                          color="black"
                          size={40}
                          cursor="pointer"
                          className="icone"
                        />
                      </Link>

                      <Link onClick={() => deleteAgendamento(agendas)}>
                        <Icon.Trash3
                          color="black"
                          size={40}
                          cursor="pointer"
                          className="icone"
                        />
                      </Link>
                    </td>
                  </tr>
         
              );
            })}
                   </tbody>
          </table>
     
      </section>
    
      {/* <section className="final"></section> */}
      <Footer />
    </div>
  );
}

export default Lista;
