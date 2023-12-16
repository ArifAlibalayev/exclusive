import React from 'react'
import "./index.scss"

function Categories() {
  return (
    <section id='categories'>
        <div className="categoriesTitle">
            <p>Categories</p>
        </div>
        <div className="browsesByCategory">
            <h2>Browse By Category</h2>
            <div className="arrowsCategory">
            <i class="fa-solid fa-arrow-left"></i>
            <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
        <div className="categoryBoxWrapper">
            <div className="categoryBox">
            <i class="fa-solid fa-mobile-screen-button"></i>
            <p>Phones</p>
            </div>
            <div className="categoryBox">
            <i class="fa-solid fa-desktop"></i>
            <p>Desktop</p>
            </div>
            <div className="categoryBox">
            <i class="fa-solid fa-camera"></i>
            <p>Camera</p>
            </div>
            <div className="categoryBox">
            <i class="fa-solid fa-headphones"></i>
            <p>Headphones</p>
            </div>
            <div className="categoryBox">
            <i class="fa-solid fa-gamepad"></i>
            <p>Games</p>
            </div>
            <div className="categoryBox">
            <i class="fa-brands fa-playstation"></i>
            <p>Playstation</p>
            </div>
        </div>
    </section>
  )
}

export default Categories