import data from "../../data/data"
import BeerCard from "../BeerCard/BeerCard"
import Nav from "../Nav/Nav"
//import SearchBox from "../SearchBox/SearchBox"
import "./BeerList.scss";
import { useState} from "react";

const BeerList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // console.log(searchTerm)
  //Map is working correctly
  const mappedBeers = data.map(item => {
    return <BeerCard beer= {item} />
  })

  
  const handleInput =(e) => {
    const cleanInput = e.target.value.toLowerCase();
    setSearchTerm(cleanInput)
  }
  //handleInput workts. Figure out how to display searched beers
  const filteredBeers = data.filter(beer => {
      return beer.name.toLowerCase().includes(searchTerm);
  })
  const mappedSearchedBeers = filteredBeers.map(item => {
    return <BeerCard beer={item} />
  })

 
   return (
    <div className="App">
      <nav>
      <Nav searchTerm={searchTerm} handleInput={handleInput}/>        
      </nav>
     <main className="beerList">
      
      {/* searchterm and searchedBeers breaks code, mappedBeers works */}
        {searchTerm} ? {mappedSearchedBeers} : {mappedBeers} 
      </main> 
    
    </div>
  )
}

export default BeerList