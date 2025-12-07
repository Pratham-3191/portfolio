import React from 'react'
import './InviteOnly.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom'
import invite1 from '/invite1.png'
import invite2 from '/invite2.png'
import invite3 from '/invite3.png'
import invite4 from '/invite4.png'
import invite5 from '/invite5.png'

function InviteOnly() {
  SwiperCore.use([Navigation])
  const images = [invite1, invite2, invite3,invite4,invite5]

  return (
    <div className='top'>
      <Link to='/' className="back"><i className='bx bx-arrow-back'></i></Link>
      <h1>Invite Only – Event Management Platform</h1>

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
          Invite Only is an advanced event management platform to create and customize events like parties, weddings, and meetups.
          Features personalized invitations with RSVP tracking, guest limits, reminders, themes, paid events, and interactive animations.
        </p>

        <div className="keyFeatures">
          <li><span>Event Creation:</span> Customize venue, date, time, and description.</li>
          <li><span>RSVP Tracking:</span> Yes / No / Maybe responses with guest limits.</li>
          <li><span>Themes & Animations:</span> Multiple interactive options for a visually appealing invitation.</li>
          <li><span>Paid Events:</span> Handles subscriptions and payments securely.</li>
        </div>

        <Link className='center' to="https://joininviteonly.com/">
          <button className='cv'>Visit Site</button>
        </Link>
      </div>
    </div>
  )
}

export default InviteOnly
