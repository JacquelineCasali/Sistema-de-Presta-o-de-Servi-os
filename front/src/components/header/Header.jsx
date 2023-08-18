
import React, { useEffect, useState } from "react";
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "../header/Header.css"
import axios from 'axios'

export default function Navbar() {
// menu
const [click,setClick] =useState(false)
const handerClick=()=>setClick(!click)
 //  importando do banco
 const [services, setServices] = useState([]);
 // useEffect chama a função do banco
 useEffect(() => {
 //  axios.get('http://localhost:7000/services')
axios.get('https://prestacao-service.onrender.com/services')

  .then(res=>setServices(res.data))
  .catch(err=>console.log(err))
 }, []);


    return (
    <div className='header'>
      <div className='container'>
        <h1>Sistema de Prestação de Serviços</h1>
        <ul className={click? 'nav-menu active':'nav-menu'}>
        
                   <li>
            <a href="/">
                Serviços</a></li>
                <li>
     <a href="/disponibilidade">Funcionarios e Disponibilidade</a>        
                
            </li>
            <li> <a href="/">
                Contato</a></li>
                <li> <Link to={`/agenda/${services.id}`}>
                Agendamento </Link>
               
                  
              </li>
        </ul>
 <div className='btn-group'>
    <button className='btn'  href="/login" >
    <Link  to="/" >  Login
     </Link>

     </button>
 </div>
{/* botao responsivo */}
<div className='hamburger' onClick={handerClick}>
  {click ?(<FaTimes size={20} style={{color:'#333'}}/>) :<FaBars size={20} style={{color:'#333'}}/>}
</div>



      </div>
    </div>
  )
}
