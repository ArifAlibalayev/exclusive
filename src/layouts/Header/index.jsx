import React from 'react'
import "./index.scss"
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header id='Header'>
      <nav id='headerNav'>
        <div className="logo">
          <h2>Exclusive</h2>
        </div>
        <div className="navBtns">
          <ul>
            <NavLink to={"/"} className={true ?  "navlinkopened" : "navlinkpending"}><li>Home</li></NavLink>
            <NavLink className={true ?  "navlinkopened" : "navlinkpending"}><li>Contact</li></NavLink>
            <NavLink className={true ?  "navlinkopened" : "navlinkpending"}><li>About</li></NavLink>
            <NavLink className={true ?  "navlinkopened" : "navlinkpending"}><li>Sign Up</li></NavLink>
            
          </ul>
        </div>
        <div className="sbmBtns">
          <div className="search">
           <input type="text" placeholder='What Are you looking for?'/>
           <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="basketwishlist">
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-regular fa-heart"></i>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header