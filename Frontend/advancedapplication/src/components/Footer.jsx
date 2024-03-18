import React from 'react'
import './Footer.css'
import { Facebook, Instagram, LinkedIn, Mail,  PhoneAndroidRounded, YouTube } from '@mui/icons-material'

function Footer() {
  return (
    <div>
    
    
<section id="footer-yoga">
<div className="main-footer">
  <div className="logoinfo" data-aos="fade-up">
    <h2>Yoga Academy</h2>
    <div className="contact-details">
      <h1>Contact Us</h1>
      <li><div className="icon phone-icon"><PhoneAndroidRounded/><a href="tel:+9112345678">+91 7987654341</a></div></li>
      <li><div className="icon mail-icon"><Mail/><a href="mailto:yogaacademymail@gmail.com">yogaacademymail@gmail.com</a></div></li>
  </div>
</div>
<div className="com " data-aos="fade-up">
  <h1>About</h1>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">FAQ</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</div>
<div className="info" data-aos="fade-up">
  <h1>Social Media</h1>
  <div className="sociallogos">
    <div className="logobox">
      <a href="#" className="icon icon-insta"><Instagram/></a>
      <a href="#" className="icon icon-linkedin"><LinkedIn/></a>
      <a href="#" className="icon icon-facebook"><Facebook/></a>
      <a href="#" className="icon icon-youtube-play"><YouTube/></a>
    </div>
  </div>
</div>
</div>
<footer>© Your Copyright 2024 All Rights Reserved</footer>
</section>
    
    
    
    </div>
  )
}

export default Footer