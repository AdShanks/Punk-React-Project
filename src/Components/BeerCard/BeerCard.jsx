import "./BeerCard.scss"

const BeerCard = (props) => {
  const {name, description, image_url} = props.beer
  return (
    <div className="beerCard">
      <img src={image_url} alt={name} height="300" width="100" />
        <h1>{name}</h1>
        <p>{description}</p>
    </div>
  )
}

export default BeerCard