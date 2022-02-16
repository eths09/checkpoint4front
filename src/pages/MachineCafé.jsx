import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../style/machinecafé.css'
import imgmachine1 from '../img/article1.jpg'
import imgmachine2 from '../img/cappuccino.jpg'
const MachineCafé = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/machine').then((res) => setData(res.data))
    console.log(data)
  }, [])

  return (
    <div className="machine">
      <ul className="machinelist">
        {data.map((machine) => (
          <li className="limachine">
            {' '}
            <div className="nameContainer">
              <p>Constucteur : </p>
              {machine.brand}
            </div>
            <div className="imgMachineContainer">
              <li>
                <img className="imgMachine" src={imgmachine1} />
              </li>
            </div>
            <div className="brandContainer">
              <div className="brandTextContainer">
                <p className="brandText">Ref : </p>
                <div className="machinename">
                  {machine.name} <br />
                </div>
              </div>
              <div className="priceContainer">
                <p className="price">price :{machine.price}€</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MachineCafé
