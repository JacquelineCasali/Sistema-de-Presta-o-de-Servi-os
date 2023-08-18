import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import axios from 'axios';
import "./Professional.css"

export default function Professional() {
  const { id } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    
    // axios.get('http://localhost:7000/services/'+ id)
    axios.get('https://prestacao-service.onrender.com/services/'+id)
    .then((res) => {
        // console.log(res);
        setServices(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
         <div className="pesquisa">
           <div className="left">
            <h2> Professional:</h2>
           <p style={{fontSize:'20px'}}> 
           <Link to={`/${services.id}`}>{services.professional}                 </Link>
           </p>
           </div>
         <div className="right">
      <h2> Availability:</h2>
      <p style={{fontSize:'20px'}}>{services.availability}</p>
      </div>
</div>
 
  )
  }