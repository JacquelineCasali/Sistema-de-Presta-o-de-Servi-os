import React from "react";
// rotas
// qual rota ele vai chamar
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Funcionario from "../../pages/Funcionario";
import Agenda from "../../pages/Agenda";
import Cadastro from "../../pages/Cadastro";
// import Pet from "../../pages/Funcionario";
// import Editar from "../../pages/Editar";
// import Teste from "../../pages/Teste"

// import deletar from "../../pages/deletar/deletar";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/:id" element={<Funcionario />} />
        <Route exact path="/agenda/:id" element={<Agenda />} /> 

 <Route exact path="/cadastro" element={<Cadastro />} /> 
        {/* // <Route exact path="/edit/:id" element={<Editar />} />  */}
      </Routes>
    </Router>
  );
};
export default AppRoutes;
