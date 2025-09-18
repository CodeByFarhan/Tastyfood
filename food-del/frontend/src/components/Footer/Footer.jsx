import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.Tasty } alt="Tasty logo" className="footer-Tasty" />
           <p>
  Tasty is your one-stop solution for delicious food delivered straight to your doorstep. We connect you with top-rated restaurants, offer real-time tracking, secure payments, and a smooth ordering experience—all in one place.
</p>

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
                <li>+1-765-411-7791</li>
                <li>contact@Tasty.com</li>
            </ul>
        </div>
      </div>
      <hr />
     <p className="footer-farhan">
  © 2025 Tasty.com. Designed and Developed by Md Farhan Alam. All rights reserved.
</p>

    </div>
  )
}

export default Footer
