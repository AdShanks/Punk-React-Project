import React from 'react'

const FilteredCheckBox = () => {
  return (
  <div className="App">
    <nav className="Nav">
      <label>Alcohol Level</label> 
      <input  type="checkbox" name="alcohol level" /> 

      <label>Acidity</label>
      <input type="checkbox" name="acidity" />   

      <label>Classic Range</label>  
      <input type="checkbox" name="classic range" />  
   </nav>
 </div>
  )
}

export default FilteredCheckBox