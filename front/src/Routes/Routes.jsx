import React from "react";
// rotas
// qual rota ele vai chamar
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ServicoseFuncionarios from "../pages/ServicoseFuncionarios";
import Serviços from "../pages/Serviços";
import Funcionario from "../pages/Funcionario";
import Agendamento from "../pages/Agendamento";

import Sucesso from "../pages/Sucesso"
import FuncionarioseDisponibilidade from "../pages/FuncionarioseDisponibilidade";
import Resumo from "../pages/resumo";
import DataeTime from "../components/DataeTime/DataeTime";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Agendamento />} /> 
      <Route exact path="/:id" element={<Agendamento />} /> 
      
      <Route exact path="/sucesso" element={<Sucesso />} /> 
        <Route path="/servicoseFuncionarios" element={<ServicoseFuncionarios />} />
        <Route exact path="/servicoseFuncionarios/:id" element={<Serviços />} />
        
        <Route exact path="/funcionarioseDisponibilidade" element={<FuncionarioseDisponibilidade />} /> 
        <Route exact path="/funcionario/:id" element={<Funcionario />} />
        
        <Route path="/1" element={<DataeTime />} />
        
        <Route exact path="/resumo" element={<Resumo />} />
        
       
        
       

 
 

       
        {/* // <Route exact path="/edit/:id" element={<Editar />} />  */}
      </Routes>
    </Router>
  );
};
export default AppRoutes;
