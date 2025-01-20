import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import SwiperCore from 'swiper';
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper/modules';
import autohub1 from '/autohub1.png'
import autohub2 from '/autohub2.png'
import autohub3 from '/autohub3.png'
import autohub4 from '/autohub4.png'

function Autohub() {
  SwiperCore.use([Navigation])
  const images = [autohub1, autohub2, autohub3, autohub4]
  return (
    <div className='top'>
      <Link to='/' className="back">  <i className='bx bx-arrow-back'></i></Link>
      <h1>
        Autohub (Cars Service Website)
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
        <p>The Cars Service Website project is designed to revolutionize how car owners access maintenance services. With the aim to simplify the car repair process, this project enables users to easily schedule appointments and explore available services right from their computers or phones. The website provides a user-friendly interface that not only showcases a clean and visually appealing design but also ensures smooth navigation and accessibility.
        </p>
        <p>
          The core functionality of the site revolves around allowing users to book appointments for various car services, such as oil changes, tire rotations, and general check-ups. Additionally, it will feature real-time communication channels, enabling customers to ask questions or request assistance without leaving the site. A vital component of the website is service history tracking, where users can view past services and keep records of maintenance activities for future reference.

          By integrating these key features, the website strives to become a reliable, go-to resource for car owners who wish to maintain their vehicles with ease. Whether users are seeking regular maintenance or troubleshooting, the platform offers the convenience of having a virtual mechanic available at all times.
        </p>
        <p>
          This project makes it possible for users to manage their car maintenance needs with minimal effort, creating a seamless experience that reduces the hassle of finding reliable and timely service. With a focus on simplicity and functionality, this platform serves as an ideal solution for anyone looking to keep their car running smoothly.
        </p>
      </div>

    </div>
  )
}

export default Autohub