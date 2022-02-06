import React from 'react'
import '../style/navbar.css'
const NavBar = () => {
  return (
    <div className="NavBar">
      <ul>
        <li>
          {' '}
          <a href="http://localhost:3000/">Home</a>
        </li>
        <li>
          {' '}
          <a href="http://localhost:3000/Café">Café</a>
        </li>
        <li>
          {' '}
          <a href="http://localhost:3000/MachineCafé">MachineCafé</a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
