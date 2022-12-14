import data from "../../data/data"
import BeerCard from "../BeerCard/BeerCard"
import "./BeerList.scss"

const BeerList = () => {

  const mappedBeers = data.map(item => {
    return <BeerCard beer= {item} />
  })
  return (
    <div className="App">
    <div className="beerList">{mappedBeers}</div>
    </div>
  )
}

export default BeerList