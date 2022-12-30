import './App.scss';
import BeerList from "./Components/BeerList/BeerList"
//import Nav from "./Components/Nav/Nav"
//import SearchBox from "./Components/SearchBox/SearchBox"

const App =() => {
 
  // const [searchTerm, setSearchTerm] = useState("");
  // const handleInput =(e) => {
  //   const cleanInput = e.target.value.toLowerCase();
  //   setSearchTerm(cleanInput)
  // }
  // const filteredBeers = data.filter(beer => {
  //   const filteredSearch = beer.name.toLowerCase();
  //   return filteredBeers.includes(searchTerm)
  // })
  return (
    <>
    <div className="App">
        
    <BeerList/>  
    </div>
    </>
  );
}

export default App;
