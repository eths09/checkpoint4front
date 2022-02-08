import '../style/coffee.css'
const Coffee = (props) => {
  return (
    <div className="allcoffee">
      <p className="pcoffee">{props.name}</p>
      <img className="imgcoffee" src={props.img} alt="img" />
      <p className="pcoffee">{props.price}$ </p>
    </div>
  )
}

export default Coffee
