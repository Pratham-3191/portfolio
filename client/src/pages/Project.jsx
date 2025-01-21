import React from 'react'
import Card from '../components/Card.jsx'
import './Project.css'

function Project() {
  return (
    <div className='projects'>
      <div className="heading">My <span>Projects</span></div>
      <div className='container'>
        <Card title="World Estate" desc="A real estate website where you can list properties for sale or rent, search for properties with advanced filters, and easily sign in with Google. It also allows users to upload images and manage property listings seamlessly." url="/real-estate" image='/realEstate2.png' />
        <Card title="Autohub " desc="Developed a user-friendly Cars Service Website aimed at simplifying car maintenance and service bookings. The website features a clean and intuitive user interface,This project focused on creating a seamless online experience for car owners, making car maintenance convenient."
          url="/autohub" image='autohub1.png' />
        <Card title="Weather App" desc="Designed and developed a Weather Tracking Website 
        enabling users to track real-time weather conditions for any city or country. The website
        features a responsive design and an intuitive interface, providing users with accurate and
        up-to-date weather information." url="/weather" image='weather1.png' />
      </div>
    </div>
  )
}

export default Project