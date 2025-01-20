import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
     <div className='icons'>
     <Link to='https://www.linkedin.com/in/pratham-chaudhari-9237a0288/' className='deco'><i className='bx zoom bxl-linkedin'></i></Link>
            <Link to='https://github.com/Pratham-3191' className='deco'><i className='bx zoom bxl-github' ></i></Link>
            <Link to='https://www.instagram.com/pratham_1049/' className='deco'> <i className='bx zoom bxl-instagram'></i></Link>
          </div>
          <p>© Pratham Chaudhari - All Rights Reserved</p>
    </div>
  )
}

export default Footer