import React, { useRef } from 'react'
import NavbarLogo from './NavbarLogo'
import "./nav.css"
import {FaTimes} from "react-icons/fa"
import{RiMenu3Fill} from "react-icons/ri"

function Nav() {
  
  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }

  return (
    <div className='nav'>
        <NavbarLogo/>
        <div ref={navRef} className='nav_link_container'>
          <ul className='nav_link'>
            <li><a href='#about'  className='nav_link_1'>ABOUT</a></li>
            <li><a href='#services'  className='nav_link_2'>SERVICES</a></li>
            <li><a href='#technologies'  className='nav_link_3'>TECHNOLOGIES</a></li>
            <li><a href='#howTo'  className='nav_link_4'>HOW TO</a></li> 
          </ul>
          <ul className='nav_btn'>
              <li><a href='#footer' className="nav_btn_left">CONTACT US</a></li>
              <li><a href='#option' className="nav_btn_right">JOIN HYDRA</a></li>
          </ul>
          <button className='nav-btn-menu nav-close-btn' onClick={showNavbar}><FaTimes/></button>
        </div>
        <button className='nav-btn-menu' onClick={showNavbar}><RiMenu3Fill className='menu-icon'/></button>
    </div>
  )
}

export default Nav