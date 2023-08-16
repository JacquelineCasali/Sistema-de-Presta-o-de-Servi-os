import React from 'react'
import { FaFacebook, FaGithub,FaLinkedin,FaTwitter } from 'react-icons/fa'
import "../footer/Footer.css"

export default function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='col col-1'>
        <h1>Salão</h1>
        </div>
        <div className='col'>
            <h5>Suport</h5>
            <span className='bar'></span>
                <a href="">Contato</a>
                <a href="">Chat</a>
                <a href="">Ajuda</a>
                <a href="">Faq</a>
           
        </div>

        



        <div className='col'>
            <h5>Social</h5>
            <span className='bar'></span>
                <a href="https://www.facebook.com/"><FaFacebook className='icon'/></a>
                <a href="https://twitter.com/">
                    <FaTwitter className='icon'/>
                </a>
                <a href="https://www.linkedin.com/">
                    <FaLinkedin className='icon'/>
                </a>
                <a href="https://github.com/">
                    <FaGithub className='icon'/>
                </a>
       
        </div>


      </div>
    </div>
  )
}
