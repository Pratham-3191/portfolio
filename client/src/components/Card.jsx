import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.css'

function Card({ title, desc, url,image }) {
  const navigate= useNavigate()
  const handleProject = () => {
    navigate(url)
  }

  return (
    <div className='card'>
      <div>
        <img className='cover-img' src={image}/>
        <div className='title'>{title}</div>
        <div className='desc'>{desc}</div>
        <button onClick={handleProject} className='read-more read'>Read more</button>
      </div>
    </div>
  )
}

export default Card