import React from "react";
import "./index.scss";

function FeaturedSection() {
  return (
    <section id="Featured">
      <div className="categoriesTitle">
        <p>Featured</p>
      </div>
      <div className="browsesByCategory">
        <h2>New Arrival</h2>
      </div>
      <div className="featuredBox">
        <div className="featuredLeft">
          <img
            src="https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/e/j/n/6-379986-6-puma-black-white-original-imagpxbfg3z9dta2.jpeg?q=90"
            alt=""
          />
          <div className="featuredTitle">
          <h3>PUMA x THE BEST</h3>
          </div>
        </div>
        <div className="featuredRight">
          <div className="upperImgBox">
            <img
              src="https://www.platypusshoes.co.nz/media/wysiwyg/PLP_CHANGES_NOV.jpg?auto=webp&quality=85&format=pjpg&width=800"
              alt=""
            />
            <div className="featuredTitle">
          <h3>UNISEX SNEAKERS</h3>
          </div>
          </div>
          <div className="lowerImgBox">
            <div className="lowerLeft">
            <div className="featuredTitle">
          <h3 style={{textAlign:"center"}}>RUN WITH COMFORT</h3>
          </div>
              <img
                src="https://proudtorun.b-cdn.net/wp-content/uploads/2022/10/Do-Nike-Shoes-Run-Big-Or-Small.jpg"
                alt=""
              />
            </div>
            <div className="lowerRight">
              <img
                src="https://ee.newbalance.eu/dw/image/v2/AASY_PRD/on/demandware.static/-/Library-Sites-NBUK-NBEU/default/dwfae3a284/images/page-designer/2023/October/FFX_1080v13_Comp_E_Image1.jpg?sw=991&sfrm=jpg"
                alt=""
              />
              <div className="featuredTitle">
          <h3 style={{textAlign:"center"}}>NEW COLLECTION</h3>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
