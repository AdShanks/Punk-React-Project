import "./Nav.scss"
import SearchBox from "../SearchBox/SearchBox"

const Nav = (props) => {
  const {searchTerm, handleInput} = props
  return (
    <div className="App">
      <nav className="Nav">
      <SearchBox handleInput={handleInput} searchTerm={searchTerm}/>
      </nav>
    </div>
  )
}

export default Nav