import React, { useState } from "react";
// importando o titulo
import { Helmet, HelmetProvider } from "react-helmet-async";
// importando estilo
import "../styles/App.css";
// import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Cadastrar() {
  const [values, setValues] = useState({
    nameanimal: "",
    idade: "",
    animal: "",
    raca: "",
    namedono: "",
    telefone: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://petshop-proqsel.onrender.com/`, values)
      .then((res) => {
        console.log(res);
        navigate("/");
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
        <h1 className="titulo">Cadastrar Pet</h1>

        <form className="login-fomr" onSubmit={handleSubmit}>
          <label htmlFor="">Nome do Animal:</label>

          <input
            className="input-padrao"
            type="text"
            onChange={(e) => {
              setValues({ ...values, nameanimal: e.target.value });
            }}
            placeholder="Digite o Nome do Animal"
            required
          />
          <label htmlFor="idade">Idade:</label>
          <input
            className="input-padrao"
            type="text"
            onChange={(e) => {
              setValues({ ...values, idade: e.target.value });
            }}
            placeholder="Digite a idade"
            required
          />

          <div className="coluna">
            <div className="coluna-right">
              <label htmlFor="nameanimal">Animal : </label>
              <input
                className="input-padrao"
                name="animal"
                type="text"
                onChange={(e) => {
                  setValues({ ...values, animal: e.target.value });
                }}
                placeholder="Digite o nome do animal "
                required
              />
            </div>

            <div className="coluna-right">
              <label htmlFor="raca">
                Raça:
                <input
                  className="input-right"
                  type="text"
                  name="raca"
                  onChange={(e) => {
                    setValues({ ...values, raca: e.target.value });
                  }}
                  placeholder="Digite a Raça"
                  required
                />
              </label>
            </div>
          </div>
          <div className="coluna">
            <div className="coluna-right">
              <label htmlFor="namedono">
                Nome do Dono:
                <input
                  className="input-right"
                  type="text"
                  onChange={(e) => {
                    setValues({ ...values, namedono: e.target.value });
                  }}
                  placeholder="Digite o nome do dono "
                  required
                />
              </label>
            </div>
            <div className="coluna-right">
              <label htmlFor="telefone">Telefone:</label>
              <input
                className="input-padrao"
                type="text"
                name="telefone"
                onChange={(e) => {
                  setValues({ ...values, telefone: e.target.value });
                }}
                placeholder="Digite o telefone"
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

export default Cadastrar;
