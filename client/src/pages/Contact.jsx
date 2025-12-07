import React, { useState } from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'

function Contact() {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState('')
  const [success,setSuccess]= useState('')
  const API= import.meta.env.VITE_API_URL;
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    console.log(formData)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e.isDefaultPrevented())
  
    const res = await fetch(`${API}/api/contact`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Request failed');
      }
  
    if (data.success === false) {
      setError(data.message);
      setSuccess('');
      return;
    }
    setError('');
    setSuccess('Message sent successfully');
  }
  return (
    <div>
      <Link to='/' className="back-btn">  <i className='bx bx-arrow-back'></i></Link>
      <form onSubmit={(e) => handleSubmit(e)} className='contact'>
        <div className='contact-info'>
          <h1>Contact Me</h1>
          <div className="name-email">
            <input onChange={(e) => handleOnChange(e)} type='text' name='fullname' placeholder='Full Name' className='name text'></input>
            <input onChange={(e) => handleOnChange(e)} type="email" name='email' placeholder='Email Address' className='email text'></input>
          </div>
          <div className="phone-sub">
            <input onChange={(e) => handleOnChange(e)} pattern="\d{10}" type='text' name='phone' placeholder='Phone Number' className='phone text'></input>
            <input onChange={(e) => handleOnChange(e)} type='text' name='subject' placeholder='Email Subject' className='sub text'></input>
          </div>
          <textarea onChange={(e) => handleOnChange(e)} type='text' name='message' placeholder='Your Message' className='textarea'></textarea>
          <div className="error">{error && error}</div>
          <div className="msg">{success&& success}</div>
          <div className='btn'><button className='submit'>Send Message</button></div>
        </div>
      </form>
    </div>
  )
}

export default Contact