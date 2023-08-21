import React from 'react'
import "../SearchBar/SearchResultList.css"
import SearchResultCliente from "./SearchResultCliente"
function SearchResultList({results}) {
  return (
    <div className='result-list'>
     {results.map((result,id)=>{
      return <SearchResultCliente result={result} key={id}/>;
     })}
     
     {/* <div><Link to={'/cadastro'}>A</Link></div> */}

           </div>
  )
}

export default SearchResultList
