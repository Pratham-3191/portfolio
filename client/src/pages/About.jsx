import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='about'>
      <div className='about-content'>
        <div> About <span>Me</span></div>
       <div className="dev"> I'm a <span>Web Developer</span></div>
        <p>I am a third-year B.E. CSE student with a passion for web development. I specialize in front-end technologies like HTML, CSS, JavaScript, React.js, and Tailwind CSS, and have experience in back-end development with MongoDB, MySQL, Node.js, and Express.js. I am dedicated to creating dynamic and responsive web applications and am always eager to learn and grow as a developer.</p>
       <Link to='/about'><button className='read-more'>Read more</button></Link> 
      </div>
    </div>
  )
}

export default About