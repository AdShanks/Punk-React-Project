import React from 'react'
// name may = name not label
const SearchBox = (props) => {
  const { searchTerm, handleInput} = props
  return (
  
    <div className="App">
       <nav className="Nav">
        <label>Beer Search</label>
       <input value={searchTerm} onInput={handleInput} type="text"/>

       {/* <label>Alcohol Level</label> 
       <input  type="checkbox" name="alcohol level" /> 

       <label>Acidity</label>
       <input type="checkbox" name="acidity" />   

       <label>Classic Range</label>  
       <input type="checkbox" name="classic range" />  */}
       </nav>
    </div>
  )
}

export default SearchBox