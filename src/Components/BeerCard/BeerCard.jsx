import "./BeerCard.scss"

const BeerCard = (props) => {
  const {name, description, image_url, abv, ph, id} = props.beer
  return (
    <div className="beerCard" key={id}>
      <img src={image_url} alt={name} height="300" width="100" />
        <h1>{name}</h1>
        <h3>ABV: {abv}</h3>
        <h3>PH Level: {ph}</h3>
        <p>{description}</p>
    </div>
  )
}

export default BeerCard