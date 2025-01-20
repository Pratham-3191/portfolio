import React from 'react'
import './RealEstate.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import SwiperCore from 'swiper';
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper/modules';
import realEstate_img1 from '/realEstate1.png'
import realEstate_img2 from '/realEstate2.png'
import realEstate_img3 from '/realEstate3.png'
import realEstate_img4 from '/realEstate4.png'

function RealEstate() {
  SwiperCore.use([Navigation])
  const images = [realEstate_img1, realEstate_img2, realEstate_img3, realEstate_img4]
  return (
    <div className='top'>
    <Link to='/' className="back">  <i className='bx bx-arrow-back'></i></Link>
      <h1>
        World Estate Website (MERN Stack)
      </h1>
      <Swiper navigation>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className='slider'
              style={{
                background: `url(${image}) `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="project-content">
        <p>I built a full-featured real estate website using the MERN stack, incorporating React.js for the frontend, Node.js and Express.js for the backend, MongoDB for the database, and Tailwind CSS for responsive and modern styling. The application also integrates Firebase for image uploads and Google authentication.</p>
        <div className="keyFeatures">
          <li><span>Property Listings:</span> Users can list properties for sale, rent, or purchase.</li>
          <li><span>Search and Filters:</span> Advanced filtering options based on the number of bedrooms, bathrooms, and type (sale or rent).</li>
          <li><span>User Authentication:</span> Google sign-in via Firebase for seamless user experience.</li>
          <li><span>Image Upload:</span> Efficient image management using Firebase.</li>
        </div>
        <p>This project demonstrates my ability to develop robust and scalable web applications, combining modern technologies and tools for a seamless user experience.</p>
        <Link className='center' to="https://world-estate.onrender.com/"><button className='cv'>Visit Site</button></Link>
      </div>

    </div>
  )
}

export default RealEstate