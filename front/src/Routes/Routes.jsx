import React from "react";
// rotas
// qual rota ele vai chamar
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Serviços from "../pages/Serviços";
import Funcionario from "../pages/Funcionario";
import Cadastro from "../pages/Cadastro";
import Agenda from "../pages/Agenda";
import Sucesso from "../pages/Sucesso"
import Disponibilidade from "../pages/Disponibilidade";
import Resumo from "../pages/resumo";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/:id" element={<Serviços />} />
        <Route exact path="/resumo" element={<Resumo />} />
        
        <Route exact path="/funcionario/:id" element={<Funcionario />} />
        
        <Route exact path="/agenda" element={<Agenda />} /> 

 <Route exact path="/cadastro/:id" element={<Cadastro />} /> 
 <Route exact path="/sucesso" element={<Sucesso />} /> 
 <Route exact path="/disponibilidade" element={<Disponibilidade />} /> 

       
        {/* // <Route exact path="/edit/:id" element={<Editar />} />  */}
      </Routes>
    </Router>
  );
};
export default AppRoutes;
