import logo from './logo.svg';
import './App.scss';
import BeerList from "./Components/BeerList/BeerList"
import Nav from "./Components/Nav/Nav"

const App =() => {
  return (
    <>
    <div className="App">
    <Nav/>
    <BeerList/>  
    </div>
    </>
  );
}

export default App;
