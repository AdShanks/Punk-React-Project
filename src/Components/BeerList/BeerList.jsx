import data from "../../data/data"
import BeerCard from "../BeerCard/BeerCard"
import Nav from "../Nav/Nav"
import "./BeerList.scss";
import { useEffect, useState} from "react";

const BeerList = () => {
  
  //useState for search filter
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ beers, setBeers ] = useState ("");
  const [url, setUrl] = useState(`https://api.punkapi.com/v2/beers`)
  const [isChecked, setIsChecked] = useState(false)


  const getBeers = () => {
    fetch(url)
    .then((res) => {
      return res.json()
    })  
    .then((data) => {
      setBeers(data)
    })
  }
  useEffect(getBeers, [url])

  // const getAbvBeers = () => {
  //   fetch("https://api.punkapi.com/v2/beers?abv_gt=6")
  //   .then((res) => {
  //     return res.json()
  //   })
  //   .then((data) => {
  //     setAbv(data)
  //   })
  // }
  
  //ABV checkbox filter
  
const handleAbv = () => {
  setUrl(`https://api.punkapi.com/v2/beers?abv_gt=6`)
    
    
  }
  
    
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



 
   return (
    <div className="App">
      <nav>
      <Nav searchTerm={searchTerm} handleInput={handleInput} handleAbv={handleAbv} />
            
      </nav>
   
     <main className="beerList">
      {searchTerm ? mappedSearchedBeers : mappedBeers}
      </main> 
    
    </div>
  )
}

export default BeerList