import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../style/machinecafé.css'
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
            <p>Name</p>
            {machine.name}
            <p>Brand</p>
            {machine.brand}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MachineCafé
