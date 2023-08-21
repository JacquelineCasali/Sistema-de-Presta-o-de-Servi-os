import React ,{useState}  from 'react'
import axios from "axios"
import {useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Professional from "../../components/professional/Professional"
import "../../styles/Agenda.css"


// estilo de alerta
import "react-toastify/dist/ReactToastify.css";

export default function Agendamento() {
 
 // formatação de alerta
 const toastOptions = {
    position: "top-center",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "green",
  
  };
  // navegação 
  const navigate = useNavigate();

  // const [submitted, setSubmitted] = useState(false);
 
 
  const [values, setValues] = useState({
    nomecliente: "",
    telephone: "",
   date:""
  });
 
     // validação da senha
    const handleValidation = () => {
      const { nomecliente, telephone } = values;
     if (nomecliente === "") {
        //campo nao pode ser vazio
        toast.error("Por favor, preencha seu nome", toastOptions);
        return false;
        } else if (telephone <= 8) {
        // campo nao pode ser vazio
        toast.error("O Telefone tem que ter de 8 dígitos", toastOptions);
        return false;
      }
      
      return true;
    };

    

    const handleSubmit = async (e) => {
      // intercepitação do evento
      e.preventDefault();
  // dateFormat(selectedDate)
      console.log("validation");
       if (handleValidation()) {
      //   // conectar banco de dados
        
      axios.post(' https://banco-agenda.onrender.com/', values)
      .then((res) => {
        console.log(res);
     
        navigate("/agendado");
        // <Link to={`../servicoseFuncionarios/${services.id}`}>Detalhe
        // </Link>
      })
      .catch((err) => console.log(err));
  
          }
    };
      return (
  
   <div>
       <Header />
        <HelmetProvider>
        <Helmet title="Agendamento" />
      </HelmetProvider>

      <div className='container'>

        {/* lado esquerdo site */}
  
      <div className='center'style={{margin:' 12px 0 0 0 '}}>
     
       <h1 className='tituloagenda' >Agendamento </h1>
       <Professional/>  
       <form onSubmit={handleSubmit} >
       <div className="form-agenda">

       <div className="colunaright">
       <div className="labelright">
      <label >Name client </label>
       
       <input className='input-agenda'

          type="text"
          placeholder="Name "
          name="nomecliente"
          onChange={(e) => setValues({ ...values, nomecliente: e.target.value })}
     />
    </div>
    <div className="labelright">
     <label >Telephone </label>
    <input className='input-agenda'
                            type="text" 
                            id="telephone" 
                            placeholder="telephone"
      onChange={(e) => setValues({ ...values, telephone: e.target.value })}
        />
       
</div>






</div></div>

<div className="colunaright">
<div className="labelright">
<label >Date </label>
<input className='input-agenda'
                            type="date" 
                            
                            placeholder="Data"
      onChange={(e) => setValues({ ...values, date: e.target.value })}
        />
{/* <Datepicker 
selected={selectedDate}

// setValues({ ...values, time: e.target.value })
onChange={(e) => setSelectedDate({...values,date:e.target.value})}
className='input-agenda'
id='date'
placeholderText='Escolha uma data'
// formatando a data
dateFormat = "dd/MM/yyyy"

/> */}
</div>
<div className="labelright">
     <label >Time </label>
    <input className='input-agenda'
                            type="time" 
                            id="time" 
                            placeholder="Time"
      onChange={(e) => setValues({ ...values, time: e.target.value })}
        />
  </div>     

</div>

 <button  className="btn-agendar">   
             
  
  Agendar</button>

     
      </form>
       </div>
     <ToastContainer toastStyle={{ backgroundColor: "crimson" }}  /> 

     </div>
     <section></section>
        <Footer />
        </div>

  )
}
