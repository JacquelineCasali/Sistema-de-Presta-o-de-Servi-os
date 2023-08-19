import React from "react";
// rotas
// qual rota ele vai chamar
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Agendamento from "../pages/Agenda/Agendamento";
import Sucesso from "../pages/Agenda/Sucesso"
import Editar from "../pages/Agenda/Editar"
import ServicoseFuncionarios from "../pages/ServicoseFuncionarios";
import Serviços from "../pages/Serviços";
import Funcionario from "../pages/Funcionario";
import FuncionarioseDisponibilidade from "../pages/FuncionarioseDisponibilidade";


import DataeTime from "../components/DataeTime/DataeTime";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Agendamento />} /> 
      <Route exact path="/:id" element={<Agendamento />} /> 
      <Route exact path="/editar/:id" element={<Editar />} /> 
      <Route exact path="/sucesso/:id" element={<Sucesso />} /> 
      
      
        <Route path="/servicoseFuncionarios" element={<ServicoseFuncionarios />} />
        <Route exact path="/servicoseFuncionarios/:id" element={<Serviços />} />
        
        <Route exact path="/funcionarioseDisponibilidade" element={<FuncionarioseDisponibilidade />} /> 
        <Route exact path="/funcionario/:id" element={<Funcionario />} />
        
        <Route path="/1" element={<DataeTime />} />
        
      
        
       
        
       

 
 

       
        {/* // <Route exact path="/edit/:id" element={<Editar />} />  */}
      </Routes>
    </Router>
  );
};
export default AppRoutes;
