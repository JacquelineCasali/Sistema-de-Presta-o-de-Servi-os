import React from 'react'
import "../SearchBar/SearchResultList.css"
import SearchResultPro from "./SearchResultPro"
function SearchResultList({results}) {
  return (
    <div className='result-list'>
     {results.map((result,id)=>{
      return <SearchResultPro result={result} key={id}/>;
     })}
     
     {/* <div><Link to={'/cadastro'}>A</Link></div> */}

           </div>
  )
}

export default SearchResultList
