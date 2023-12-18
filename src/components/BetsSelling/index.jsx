import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useContext, useEffect, useState } from "react";
import '@splidejs/react-splide/css';
import "./index.scss"
import { BasketContext } from "../../context/BasketProvider";

function BestSelling() {
  const [apiData, setApiData] = useState([]);
  const {basket, AddToBasket} = useContext(BasketContext)


  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await fetch(
      "https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products"
    );
    const data = await res.json();
    setApiData(data);
  }

  const forCarousel = apiData.splice(17, 10);
  return (
    <section id="SliderCarousel">
      <div className="categoriesTitle">
            <p>This month</p>
        </div>
        <div className="browsesByCategory">
            <h2>Best Selling Products</h2>
            <div className="viewAll">
                <p>View All</p>
            </div>
        </div>
      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          width: "100%",
          gap: "50px",
          perPage: 5,
          focus: 0,
          omitEnd: true,
          pagination:false
        }}
      >

        {forCarousel.map(x=>(
            <SplideSlide>
            <div className="productCard" key={x.id}>
                <div className="productImgBox">
                <i class="fa-regular fa-eye"></i>
                <i class="fa-regular fa-heart"></i>
                    <img src={x.thumbnail} alt="" />
                <div className="addToCart">
                    <h3  onClick={()=>AddToBasket(x)}>Add To Cart</h3>
                </div>
                </div>
                <h4>{x.name}</h4>
                <div className="productPR">
                    <p>${x.price}</p>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-thin fa-star"></i>
                </div>
            </div></SplideSlide>
        ))}
        
      </Splide> 
    </section>
  );
}

export default BestSelling;
