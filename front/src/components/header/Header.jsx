
import React, { useEffect, useState } from "react";
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "../header/Header.css"


export default function Navbar() {
// menu
const [click,setClick] =useState(false)
const handerClick=()=>setClick(!click)
 //  importando do banco
 


    return (
    <div className='header'>
      <div className='container'>
        <h1>Sistema de Prestação de Serviços</h1>
        <ul className={click? 'nav-menu active':'nav-menu'}>
        
                   <li>
            <Link to="/servicoseFuncionarios">
                Serviços e Funcionarios</Link></li>
                <li>
     <Link to="/funcionarioseDisponibilidade">Funcionarios e Disponibilidade</Link>        
                
            </li>
          
                <li> <Link to={"../"}>
                Agenda </Link>
               
                  
              </li>
              <li> <Link to={"../agendamentos"}>
              Agendamentos </Link>
               
                  
              </li>
              
        </ul>
 {/* <div className='btn-group'>
    <button className='btn'  href="/login" >
    <Link  to="/" >  Login
     </Link>

     </button>
 </div> */}
{/* botao responsivo */}
<div className='hamburger' onClick={handerClick}>
  {click ?(<FaTimes size={30} style={{color:'#333'}}/>) :<FaBars size={30} style={{color:'#333'}}/>}
</div>



      </div>
    </div>
  )
}
