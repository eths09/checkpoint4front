import React from 'react'
import { Link } from 'react-router-dom'
import '../style/navbar.css'
const NavBar = () => {
  return (
    <div className="NavBar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Cafe">Café</Link>
          </li>
          <li>
            <Link to="/Machinecafe">Machine à Café</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
