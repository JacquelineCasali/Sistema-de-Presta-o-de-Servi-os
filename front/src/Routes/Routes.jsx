import React from "react";
// rotas
// qual rota ele vai chamar
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Lista from "../pages/Agenda/Agenda";

import ResumoAgenda from "../pages/Agenda/ResumoAgenda";
import Pet from "../pages/Agenda/Editar"
import Agendado from "../pages/Agenda/Agendado";


import Agendamento from "../pages/Agenda/Agendamento";
import Cancelado from "../pages/Agenda/Cancelado"
import ServicoseFuncionarios from "../pages/ServicoseFuncionarios";
import Serviços from "../pages/Serviços";
import Funcionario from "../pages/Funcionario";
import FuncionarioseDisponibilidade from "../pages/FuncionarioseDisponibilidade";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Agendamento />} /> 
      <Route path="/agendamentos" element={<Lista />} />
        <Route exact path="/agendado" element={<Agendado />} />
        <Route exact path="/:id" element={<ResumoAgenda />} />
        
      
        <Route exact path="/edit/:id" element={<Pet />} />
        <Route exact path="/cancelado" element={<Cancelado />} /> 
      
        {/* <Route exact path="/cancelado" element={<DeletadoComSucesso />} />
       */}
      
      
      
      {/* <Route exact path="/editar/:id" element={<Editar />} />  */}
      
      <Route path="/servicoseFuncionarios" element={<ServicoseFuncionarios />} />
      <Route exact path="/servicoseFuncionarios/:id" element={<Serviços />} />
      <Route exact path="/funcionarioseDisponibilidade" element={<FuncionarioseDisponibilidade />} /> 
      <Route exact path="/funcionario/:id" element={<Funcionario />} />
        
        
      
        
       
        
       

 
 

       
        {/* // <Route exact path="/edit/:id" element={<Editar />} />  */}
      </Routes>
    </Router>
  );
};
export default AppRoutes;
