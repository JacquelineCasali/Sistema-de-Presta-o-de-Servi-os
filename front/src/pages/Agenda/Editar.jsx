import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "../../styles/Agenda.css"


function Pet() {
  const { id } = useParams();
  // banco de dados ler
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5430/" + id)

      .then((res) => {
        console.log(res);
        setValues(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const [values, setValues] = useState({
    nomecliente: "",
    telephone: "",
   date:"",
   time:"",
  });

  // mudar de pagina
  const navigate = useNavigate();
  // editar
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
    .put("https://banco-agenda.onrender.com/" + id, values)
      
    // .put("http://127.0.0.1:5430/" + id, values)
      .then((res) => {
        console.log(res);
        navigate(`../${values.id}`);
      
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header />
      <HelmetProvider>
        <Helmet title="Editar Agendamento" />
      </HelmetProvider>

      <div className='container'>
      <div className='center'style={{margin:' 12px 0 0 0 '}}>
        <h1 className="tituloagenda">Editar Agendamento</h1>

        <form onSubmit={handleUpdate}>
        <div className="form-agenda">

        <div className="colunaright">
       <div className="labelright">
      <label >Name client </label>
          
          <input
           className='input-agenda'
            type="text"
            value={values.nomecliente}
            onChange={(e) => {
              setValues({ ...values, nomecliente: e.target.value });
            }}
          />
              </div>
          <div className="labelright">
          <label htmlFor="telephone">Telephone:</label>
          <input
          
           className='input-agenda'
          
            type="text"
            value={values.telephone}
            onChange={(e) => {
              setValues({ ...values, telephone: e.target.value });
            }}
          />
          </div>
       
          </div>
    
          
          <div className="colunaright">
            <div className="labelright">
              <label htmlFor="date">Date : </label>
              <input
                className="input-agenda"
                name="text"
                type="date"
                value={values.date}
                onChange={(e) => {
                  setValues({ ...values, date: e.target.value });
                }}
              />
            </div>
            <div className="labelright">
     <label >Time </label>
    <input className='input-agenda'
                            type="text" 
                            id="time" 
                            value={values.time}
                            placeholder="Time"
      onChange={(e) => setValues({ ...values, time: e.target.value })}
        />
  </div>     


          
          
          
          
               </div>
               </div>
         
          <button className="btn-agendar">Editar</button>
        </form>
      </div>
      </div>

      <Footer />
    </div>
  );
}
export default Pet;
