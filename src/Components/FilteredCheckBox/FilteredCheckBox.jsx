import React from 'react'

const FilteredCheckBox = (props) => {
  const {abvFilter, handleAbv} = props
  return (
  <div className="App">
    <nav className="Nav">
      <label>ABV (greter than 6%)</label> 
      <input value = {abvFilter} onChange={handleAbv}  type="checkbox" name="ABV over 6%" /> 

      <label>Acidity</label>
      <input type="checkbox" name="acidity" />   

      <label>Classic Range</label>  
      <input type="checkbox" name="classic range" />  
   </nav>
 </div>
  )
}

export default FilteredCheckBox