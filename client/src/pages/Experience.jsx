import React from 'react'
import Card from '../components/Card.jsx'
import './Project.css'   
import fitstack1 from '/fitstack1.png'

function Experience() {
  return (
    <div className="projects">
      <div className="heading">Work <span>Experience</span></div>

      <div className="experience-intro">
        <h2 className="role">Frontend Developer Intern</h2>
        <p className="company">Phantom Click, Noida (Remote)</p>
        <p className="duration">3 Months Internship</p>
        <p className="summary">
          Completed a 3-month WFH internship as a Frontend Developer, contributing to two full-fledged
          projects currently live in production. Worked collaboratively with design and backend teams
          to deliver scalable, responsive, and production-ready interfaces with consistent UI/UX.
        </p>
      </div>

      <div className="container">
        <Card 
          title="Fitstack – Fitness Marketplace & Dashboard" 
          desc="A dynamic marketplace platform for listing and discovering fitness services such as gyms, yoga, and Zumba. Built both user and partner panels, plus spearheaded Version 2 with a real-time dashboard, analytics, graphs, and secure payments."
          url="/fitstack"
          image={fitstack1}
        />
        
        <Card 
          title="Invite Only – Event Management Platform" 
          desc="An advanced event management platform to create and customize events like parties, weddings, and meetups. Features personalized invitations with RSVP tracking, guest limits, reminders, themes, paid events, and interactive animations."
          url="inviteOnly"
          image="/invite1.png"
        />
      </div>
    </div>
  )
}

export default Experience
