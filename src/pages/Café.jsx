import axios from 'axios'
import '../style/café.css'
import Coffee from '../components/Coffee'
import lobodis from '../img/coffeelobodis.jpg'
import lavazza from '../img/coffeelavazza.jpg'
import lugat from '../img/coffeelugat.jpg'

const Café = () => {
  return (
    <div className="allcafé">
      <Coffee name="Lobodis" img={lobodis} price="12" />
      <Coffee name="Lavazza" img={lavazza} price="8" />
      <Coffee name="Lugat" img={lugat} price="25" />
    </div>
  )
}

export default Café
