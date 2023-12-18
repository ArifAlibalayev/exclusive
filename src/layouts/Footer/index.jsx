import React from 'react'
import './index.scss'

function Footer() {
  return (
    <footer id='footer'>
      <div className="footerUp">
      <div className="ExclusiveSub">
        <h3>Exclusive</h3>
        <h4>Subscribe</h4>
        <p>Get 10% off your first order</p>
        <div className="emailFooter">
        <input type="text" name="" id="" placeholder='Enter Your Email' />
        <i class="fa-solid fa-caret-right"></i>
        </div>
      </div>
      <div className="footerSupport">
        <h3>Support</h3>
        <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>
      <div className="footerAcc">
        <h3>Account</h3>
        <p>My Account</p>
        <p>Login / Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>

      </div>
      <div className="footerQL">
        <h3>Quick Link</h3>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
      <div className="footerDownloadd">
        <h3>Download App</h3>
      </div>
      </div>

    </footer>
  )
}

export default Footer