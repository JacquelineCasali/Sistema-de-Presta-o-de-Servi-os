import React from 'react'
import "../SearchBar/SearchResultList.css"
import { useNavigate } from "react-router-dom";
const SearchResultPro = ({result}) => {
  const navigate = useNavigate();
  // return <div className='search-result'onClick={(e)=>(alert(`Você clicou em  ${result.name}`))}>{result.name}</div>
  return <div className='search-result'onClick={(e)=>( navigate(`/funcionario/${result.id}`))}>{result.professional}</div>
}

export default SearchResultPro
