import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

function Header() {
  const toggle = () => {
    document.querySelector('.nav').classList.toggle('active')
    document.querySelector('.menu').classList.toggle('bx-x')
  }
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({behavior:'smooth'})
  }
  return (
    <div className='header'>
      <div className='logo'>Pratham Chaudhari</div>
      <i onClick={toggle} className='zoom bx bx-menu menu'></i>
      <nav className='nav '>
        <Link to='/' onClick={() => handleScroll('home')}> <span>Home</span></Link>
        <Link to='/' onClick={() => handleScroll('about')}><span>About</span></Link>
        <Link to='/' onClick={() => handleScroll('projects')}><span>My projects</span></Link>
        <Link to='/contact' ><span>Contact</span></Link>
      </nav>
    </div>
  )
}

export default Header