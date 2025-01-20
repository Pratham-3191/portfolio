import React from 'react'
import { Link } from 'react-router-dom'
import './AboutMe.css'

function AboutMe() {
  return (
    <div className='about-page'>
      <Link to='/' className="back">  <i className='bx bx-arrow-back'></i></Link>
      <div className='aboutMe'>
        <p>
          I am currently a third-year Bachelor of Engineering student in Computer Science and Engineering (B.E. CSE), with a deep passion for web development. Over the course of my academic journey, I have honed my skills in both front-end and back-end technologies, with a strong focus on creating intuitive, responsive, and high-performance websites.
        </p>

        <p>On the front-end, I specialize in building engaging user interfaces using HTML, CSS, and JavaScript. I have extensive experience working with React.js, which allows me to create dynamic and responsive web applications. Additionally, I am proficient in using Tailwind CSS, a utility-first CSS framework, to rapidly build custom, scalable designs.
          In terms of back-end development, I am well-versed in using MongoDB, a NoSQL database, to handle large volumes of data efficiently. I also have hands-on experience working with Node.js and Express.js, which enables me to build robust and scalable server-side applications.
        </p>
        <p>
          Throughout my journey, I have had the opportunity to work on full-stack web development projects, which have strengthened my problem-solving abilities and allowed me to integrate both front-end and back-end technologies seamlessly. My goal is to continue expanding my knowledge and expertise in web development, while contributing to the creation of meaningful and user-friendly digital experiences.
        </p>
      </div>
    </div>
  )
}

export default AboutMe