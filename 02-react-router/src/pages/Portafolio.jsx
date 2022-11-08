import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Portafolio = () => {
  return (
    <>
      <h1>Portafolio</h1>
      
      <nav>
        <ul>
          <li>
            <Link to='/portafolio/1'>Pinterest</Link>
          </li>
          <li>
            <Link to='/portafolio/2'>Cajero</Link>
          </li>
          <li>
            <Link to='/portafolio/3'>MovieDB</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Portafolio