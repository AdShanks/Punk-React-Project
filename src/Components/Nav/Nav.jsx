import "./Nav.scss"
import SearchBox from "../SearchBox/SearchBox"

const Nav = () => {
  return (
    <div className="App">
      <nav className="Nav">
      <SearchBox/>
      <label>Alcohol Level</label> 
      <input type="checkbox" name="alcohol level" /> 
      <label>Acidity</label>
      <input type="checkbox" name="acidity" />   
      <label>Classic Range</label>  
      <input type="checkbox" name="classic range" /> 
      </nav>
    </div>
  )
}

export default Nav