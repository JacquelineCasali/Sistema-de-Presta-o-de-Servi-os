import React  from 'react'
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from 'react-router-dom';
import "../../styles/Agenda.css"

export default function AgendadoSucesso() {
  return (
    <div>
      <Header />
      <HelmetProvider>
        <Helmet title="Agendamento" />
      </HelmetProvider>
       <div className='container'>
       <div  className='center'>
       <h1 className='tituloagenda' > 
            Agendamento Realizado com Sucesso </h1>
            <button  className="btn-agendar">
     <Link className="link" to={`/`}>
            Novo Agendamento
          </Link>
     </button>
    </div>
    </div>
<section ></section>
<section ></section>
<section ></section>
<section ></section>
<section ></section>
<section ></section>

    <Footer/>
    </div>
  )
}
