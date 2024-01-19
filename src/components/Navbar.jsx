import React from 'react'
import logo from '../assets/burgerlogo.png'
import {Link} from 'react-router-dom';
import '../styles/Navbar.css'
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='main'>
        <img src={logo} alt="logo"/>
        <div className='mainLink'>
            <Link to="/">
            Anasayfa
            </Link>
            <Link to="/Menu">
            Menu    
            </Link>
            <Link to="/About">
            Hakkımızda
            </Link>
            <Link to="/Contact">
            İletişim
            </Link>
        </div>
      </div>
    </div>
  )
}
