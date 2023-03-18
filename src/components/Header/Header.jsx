import React from 'react'
import Contact from './Contact/Contact'
import HeaderInfo from './HeaderInfo/HeaderInfo'
import Nav from './Nav/Nav'

function Header() {
  return (
    <header className='header'>
        <Nav/>
        <HeaderInfo/>
        <Contact/>
    </header>
  )
}

export default Header