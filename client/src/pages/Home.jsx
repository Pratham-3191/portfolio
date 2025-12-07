import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

const TypedText = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Web Developer", "Frontend Developer", "Backend Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: true,
    };
    const typed = new Typed(typedElement.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typedElement}></span>;
};

function Home() {
  const [error, setError] = useState('');

  // const handleCV = async () => {
  //   try {
  //   } catch (error) {
  //     setError("Error downloading CV.");
  //   }
  // };

  return (
    <div id='home' className='main'>
      <div className='content'>
        <img className='profile-img' src="/profile.jpeg" alt="profile" />
        <div className='home-content'>
          <h3>Hello, Myself</h3>
          <h1>Pratham Chaudhari</h1>
          <h3>And I'm a <TypedText /></h3>
          <p>A strong passion for web development, seeking to leverage my expertise in both front-end and back-end technologies to create intuitive, responsive, and high-performance web applications. Proficient in modern frameworks like React.js and Tailwind CSS, and well-versed in backend tools such as Node.js, Express.js, and MongoDB, I aim to contribute to innovative projects that enhance user experiences. I am committed to continuously learning and applying new technologies to develop seamless and impactful digital solutions.</p>
          <div className='icons'>
            <Link to='https://www.linkedin.com/in/pratham-chaudhari-9237a0288/' className='deco'><i className='bx zoom bxl-linkedin'></i></Link>
            <Link to='https://github.com/Pratham-3191' className='deco'><i className='bx zoom bxl-github' ></i></Link>
            <Link to='https://www.instagram.com/pratham_1049/' className='deco'> <i className='bx zoom bxl-instagram'></i></Link>
          </div>
          <div className='error'>{error && error}</div>
          <a
            href="https://drive.google.com/file/d/1KBCElysanGFdLjnGm0C4n_h_4YVcrNh7/view?pli=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className='cv'>Download CV</button>
          </a>

        </div>
      </div>
    </div>
  );
}

export default Home;
