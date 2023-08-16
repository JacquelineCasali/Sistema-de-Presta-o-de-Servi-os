import React, { useState,useEffect } from "react";
// importando o titulo
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
// importando estilo
import "../styles/App.css";
// import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Agenda() {

    // vindo da lista
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
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post(`https://petshop-proqsel.onrender.com/`, id)
          .then((res) => {
            console.log(res);
      
          })
          .catch((err) => console.log(err));
      };
    
  return (
    <div className="App">
      <Header />
      <HelmetProvider>
        <Helmet title="Cadastrar Pet" />
      </HelmetProvider>
      <section className="editar">
      <div class="titulo">Agendamento</div>
       
        <form className="login-fomr" onSubmit={handleSubmit}>
          
        <div className="coluna">
            <div className="coluna-right">
              <label htmlFor="professional">Professional : </label>
              <input
                className="input-padrao"
                name="professional"
                type="text"
                onChange=
                {services.professional} 
              
                placeholder="Digite seu CPF "
                required
              />
            </div>

            <div className="coluna-right">
            <label htmlFor="serviçe">Serviçe:</label>
              <input
                className="input-padrao"
                type="text"
                name="serviçe"
                onChange={services.name}
                placeholder="Digite o telefone"
                required
              />
</div>
          </div>
          
          
          
          
          
          <label htmlFor="">Nome:</label>

          <input
            className="input-padrao"
            type="text"
            
            placeholder="Digite o Nome Seu Nome"
            required
          />
        
          <div className="coluna">
            <div className="coluna-right">
              <label htmlFor="nameanimal">CPF : </label>
              <input
                className="input-padrao"
                name="cpf"
                type="text"
                placeholder="Digite seu CPF "
                required
              />
            </div>

            <div className="coluna-right">
            <label htmlFor="telefone">Telefone:</label>
              <input
                className="input-padrao"
                type="text"
                name="telefone"
                placeholder="Digite o telefone"
                required
              />
</div>
          </div>
          <div className="coluna">
            <div className="coluna-right">
             
                     
             
              <label htmlFor="namedono">
              Escolha a Data
                <input
                  className="input-right"
                  type="date"
                 
                  required
                />
              </label>
            </div>
            <div className="coluna-right">
            
            <label htmlFor="telefone">Escolha um Horario</label>
            <input
                  className="input-padrao"
                  type="time"
                 
                  required
                />    
                 
             
                        </div>
          </div>

          <button className="button-senha">Agendar</button>
        </form>
      </section>
      <section className="pr"></section>
      <Footer />
    </div>
  );
}

export default Agenda;
