import React from 'react'
import './Fitstack.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom'
import fitstack1 from '/fitstack1.png'
import fitstack2 from '/fitstack2.png'
import fitstack3 from '/fitstack3.png'
import fitstack4 from '/fitstack4.png'

function Fitstack() {
  SwiperCore.use([Navigation])
  const images = [fitstack1, fitstack2, fitstack3,fitstack4]

  return (
    <div className='top'>
      <Link to='/' className="back"><i className='bx bx-arrow-back'></i></Link>
      <h1>Fitstack – Fitness Marketplace & Dashboard</h1>

      <Swiper navigation>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className='slider'
              style={{
                background: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="project-content">
        <p>
          Fitstack is a dynamic marketplace platform for listing and discovering fitness services such as gyms, yoga classes, and Zumba.
          Built both user and partner panels, plus spearheaded Version 2 with a real-time dashboard featuring analytics, graphs, and secure payments.
        </p>

        <div className="keyFeatures">
          <li><span>User Platform:</span> Explore and book fitness services based on preferences and location.</li>
          <li><span>Partner Panel:</span> Gym owners can register, list services, provide descriptions, set pricing, and manage listings.</li>
          <li><span>Dashboard:</span> Version 2 with real-time stats, analytics, and business growth visualization.</li>
          <li><span>Payments:</span> Integrated secure payment gateway for subscriptions and transactions.</li>
        </div>

        <Link className='center' to="https://fitstack.phantomclick.in/">
          <button className='cv'>Visit Site</button>
        </Link>
      </div>
    </div>
  )
}

export default Fitstack
