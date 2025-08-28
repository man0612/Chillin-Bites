import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo2} alt="" />
            <p>Chillin-Bites is your go-to food delivery platform, bringing delicious meals
            from local restaurants straight to your doorstep. Fresh, fast, and tasty every time!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
            
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-9817262800</li>
                <li>contact@chillin-bites.com</li>
                <li>123  Park Street, Kolkata ,West Bengal</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© 2024 Chillin' Bites. All rights reserved.</p>
    </div>
  )
}

export default Footer
