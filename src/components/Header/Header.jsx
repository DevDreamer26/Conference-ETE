import React,{useState} from "react"
import { NavLink,Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { FaFacebook,FaInstagram,FaYoutube,FaTwitter } from "react-icons/fa";
import "./Header.css"
const Header = () => {
    const [click, setClick] = useState(false)
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>National Level Conference on Machine Learning and Artificial Intelligence</h1>
            <span>at Assam Engineering College,Guwahati</span>
            <h2 style={{color:"black"}}>Department of ETE and CSE</h2>
          </div>

        </div>
      </section>
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/program'>Program</NavLink>
            </li>
            
           
            <li>
              <NavLink to='/notice'>Notice</NavLink>
            </li>
            <li>
              <NavLink to='/speaker'>Speakers</NavLink>
            </li>
            
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
          </ul>
          <div className='start'>
            <div className='button'><Link to="/">Register</Link> </div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i >< RxCross1/> </i> : <i><GiHamburgerMenu/></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
