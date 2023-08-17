import React,{useState} from 'react'
import {FaSearch} from "react-icons/fa"
import "./SearchBar.css"
function SearchBar({setResults}) {
    const [input,setInput]=useState([])
  //conenctando o banco
    const fetchData=(value)=>{
        fetch("https://prestacao-service.onrender.com/services")
        .then((response)=>response.json())
       .then((json)=>{
        const results=json.filter((user)=>{
       // pesquisa em maisculo e minusculo toLowerCase
            return (
            value && 
            user && 
            user.name &&
            user.name.toLowerCase().includes(value.toLowerCase())
            )
        })
        setResults(results)
        // console.log(results)
    })
    }
    // console.log(input)
   // lendo o input
    const handleChange=(value)=>{
        setInput(value)
        fetchData(value)
    }
    
  return (
    <div className='input-wrapper'>
        < FaSearch id='search-icon'
         />
        <input  className="input-pesquisa"
            type="text"
             placeholder="Pesquise aqui pelo name "
             values={input}
             onChange={(e)=>handleChange(e.target.value)}
           
          />
    </div>
  )
}

export default SearchBar
