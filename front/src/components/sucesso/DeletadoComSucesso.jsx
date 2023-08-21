import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Agenda.css"

export default function Sucesso() {
  return (
    <div>
       <div className='container'>
       <div className='center'style={{margin:' 12px 0 0 0 '}}>
       <h1 className='tituloagenda' >      Agendamento Cancelado com Sucesso </h1>

  
    
     <button  className="btn-agendar">
     <Link className="link" to={`/`}>
            Novo Agendamento
          </Link>
     </button>
     </div>
    </div>
    </div>
  )
}
