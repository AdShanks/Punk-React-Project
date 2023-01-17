import data from "../../data/data"
import BeerCard from "../BeerCard/BeerCard"
import Nav from "../Nav/Nav"
import "./BeerList.scss";
import { useEffect, useState} from "react";

const BeerList = () => {
  
  //useState for search filter
  const [searchTerm, setSearchTerm] = useState("");
  const [beers, setBeers] = useState ("");

  const getBeers = () => {
    fetch("https://api.punkapi.com/v2/beers")
    .then((res) => {
      return res.json()
    })  
    .then((data) => {
      setBeers(data)
    })
  }

  
  
  //useState for ABV checkbox filter
  const [abvFilter, setAbvFilter] = useState(false);
  console.log(abvFilter)

  //Handle change for ABV checkbox
  const handleAbv = () => {
    setAbvFilter(!abvFilter)};
    
  const filterByAbv = data.filter(beer => {
    return beer.abv > 6
  });

  const mappedAbvFilter = filterByAbv.map(item => {
    return <BeerCard beer={item} />
  })
    

  
  
  //Map over Beer Cards
  const mappedBeers = beers && beers.map(beer => {
    return <BeerCard beer= {beer} />
  })

  //Handle Input for search box
  const handleInput =(e) => {
    const cleanInput = e.target.value.toLowerCase();
    setSearchTerm(cleanInput)
  }
  
  const searchFilteredBeers = data.filter(beer => {
      return beer.name.toLowerCase().includes(searchTerm);
  })
  
  //Map ove searched beers
  const mappedSearchedBeers = searchFilteredBeers.map(item => {
    return <BeerCard beer={item} />
  })

  useEffect(getBeers, [])

 
   return (
    <div className="App">
      <nav>
      <Nav searchTerm={searchTerm} handleInput={handleInput} abvFilter={abvFilter} handleAbv = {handleAbv} />
            
      </nav>
     <main className="beerList">
      
      {/* searchterm and searchedBeers breaks code, mappedBeers works */}
        {searchTerm} ? {mappedSearchedBeers} : {mappedBeers}
        {abvFilter} ? {mappedAbvFilter} : {mappedBeers}  
        
        {/* {/* {beers && beers.map((beer) => { */}
          {/* return <BeerCard beer = {beer} />
        })} */}
      </main> 
    
    </div>
  )
}

export default BeerList