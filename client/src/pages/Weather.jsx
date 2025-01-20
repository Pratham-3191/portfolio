import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import SwiperCore from 'swiper';
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper/modules';
import weather1 from '/weather1.png'
import weather2 from '/weather2.png'
function Weather() {
  SwiperCore.use([Navigation])
  const images=[weather1,weather2]
  return (
    <div className='top'>
    <Link to='/' className="back">  <i className='bx bx-arrow-back'></i></Link>
      <h1>
      Weather Tracking Website
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
        <p>The Weather Website project is designed to provide users with real-time weather information, offering a seamless experience for checking current weather conditions, forecasts, and other important climate data. With its clean and user-friendly interface, the website aims to make weather tracking both easy and visually appealing for users across all devices.</p>
       <p>
       The main page displays essential weather information such as temperature, humidity, wind speed, and air pressure, along with a dynamic weather icon representing the current conditions (sunny, rainy, cloudy, etc.). This ensures that users can quickly get a snapshot of the weather in their area.
       </p>
       <p>
       Behind the scenes, the website is powered by HTML, CSS, and JavaScript, with JavaScript being used to interact with weather APIs that provide up-to-date information from reliable weather services. The use of JavaScript allows the website to dynamically fetch weather data and display it without requiring the user to refresh the page, making for a more interactive experience. CSS enhances the overall design of the website, ensuring that it is visually appealing and responsive, adapting to different screen sizes and resolutions.
       </p>
      </div>

    </div>
  )
}

export default Weather