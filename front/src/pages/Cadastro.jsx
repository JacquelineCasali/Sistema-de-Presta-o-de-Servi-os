import React ,{useState}  from 'react'
import axios from "axios"
import {useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Professional from "../components/professional/Professional"
import "../styles/Agenda.css"


// estilo de alerta
import "react-toastify/dist/ReactToastify.css";

export default function Cadastro() {
 
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
  
  const [values, setValues] = useState({
    nomecliente: "",
    telephone: "",
  
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
  
      console.log("validation");
       if (handleValidation()) {
      //   // conectar banco de dados
     
     
      axios.post('http://127.0.0.1:5430', values)
      .then((res) => {
        console.log(res);
        navigate("/sucesso");
      })
      .catch((err) => console.log(err));
  
       
        const { nomecliente, telephone } = values;
        const { data } = await axios.post("http://127.0.0.1:5430", {
          nomecliente: "",
       telefone: "",
        });
        if (data.status === false) {
          toast.error(data.msg, toastOptions);
        }
        if (data.status === true) {
          localStorage.setItem(
            "Cadastro",
            // process.env.REACT_APP_LOCALHOST_KEY,
            JSON.stringify(data.user)
          );
          navigate("/sucesso");


          
        }
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
                           </div>
                           </div>                          
                    <button  className="btn-agendar">Agendar</button>
                </form>
       </div>
            <ToastContainer toastStyle={{ backgroundColor: "crimson" }}  /> 

        </div>
        <Footer />
        </div>

  )
}
