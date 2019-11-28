import React from 'react'
import { Link } from 'react-router-dom'

const Navigations = () => {
  return (
    <ul>
      <li>
        <Link to='/home'>Home</Link>
      </li>
      <li>
        <Link to='/locations'>Locations</Link>
      </li>
      <li>
        <Link to='/characters'>Characters</Link>
      </li>
    </ul>
  )
}

export default Navigations