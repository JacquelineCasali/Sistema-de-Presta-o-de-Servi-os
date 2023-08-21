import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import DeletadoComSucesso from "../../components/sucesso/DeletadoComSucesso";
export default function Cancelado() {
  return (
    <div className="App">
      <Header />
      <HelmetProvider>
        <Helmet title="Agendamento Cancelado" />
      </HelmetProvider>

      <section className="editar">
       <DeletadoComSucesso/>
      </section>
      <Footer />
    </div>
  );
}
  
  
  
  
  




 
