import React from "react";
// rotas
// qual rota ele vai chamar
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Funcionario from "../pages/Funcionario";
import Cadastro from "../pages/Cadastro";
import Agenda from "../pages/Agenda";
import Sucesso from "../pages/Sucesso"


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/:id" element={<Funcionario />} />
        <Route exact path="/agenda" element={<Agenda />} /> 

 <Route exact path="/cadastro/:id" element={<Cadastro />} /> 
 <Route exact path="/sucesso" element={<Sucesso />} /> 

       
        {/* // <Route exact path="/edit/:id" element={<Editar />} />  */}
      </Routes>
    </Router>
  );
};
export default AppRoutes;
