import React from 'react'
import "./SearchResultList.css"
import { useNavigate } from "react-router-dom";
const SearchResult = ({result}) => {
  const navigate = useNavigate();
  // return <div className='search-result'onClick={(e)=>(alert(`Você clicou em  ${result.name}`))}>{result.name}</div>
  return <div className='search-result'onClick={(e)=>( navigate(`/servicoseFuncionarios/${result.id}`))}>{result.name}</div>
}

export default SearchResult

