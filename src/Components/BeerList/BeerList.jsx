import data from "../../data/data"
import BeerCard from "../BeerCard/BeerCard"
import Nav from "../Nav/Nav"
//import SearchBox from "../SearchBox/SearchBox"
import "./BeerList.scss";
import { useState} from "react";

const BeerList = () => {
  
  //Map is working correctly
  const mappedBeers = data.map(item => {
    return <BeerCard beer= {item} />
  })

  const [searchTerm, setSearchTerm] = useState("");
  const handleInput =(e) => {
    const cleanInput = e.target.value.toLowerCase();
    setSearchTerm(cleanInput)
  }
  const filteredBeers = data.filter(beer => {
      return beer.name.toLowerCase().includes(searchTerm);
  })
  const searchedBeers = <BeerCard filteredBeers={filteredBeers} />;

 
   return (
    <div className="App">
      <nav>
      <Nav />        
      </nav>
     <main className="beerList">
      
      {/* searchterm and searchedBeers breaks code, mappedBeers works */}
     {/* {searchTerm} ? {searchedBeers} : {mappedBeers} */}
      </main> 
    
    </div>
  )
}

export default BeerList