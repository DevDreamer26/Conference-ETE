import React from 'react'
import {NavLink,Link}  from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav><ul>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        {/* <li><NavLink to='/about'>About</NavLink></li> */}
        
        
    </ul></nav>



    </>
  )
}

export default Navbar