import React from 'react'

import "./SearchResultList.css"
import SearchResult from "./SearchResult"
function SearchResultList({results}) {
  return (
    <div className='result-list'>
     {results.map((result,id)=>{
      return <SearchResult result={result} key={id}/>;
     })}
     
     {/* <div><Link to={'/cadastro'}>A</Link></div> */}

           </div>
  )
}

export default SearchResultList
