import React, { useContext, useEffect, useState } from 'react'
import './index.scss'
import { BasketContext } from '../../context/BasketProvider'

function Products() {
    const [apiData, setApiData] = useState([])
    const {basket, AddToBasket} = useContext(BasketContext)

   useEffect(() => {
    getData()
   }, [])

   async function getData() {
    const res = await fetch("https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products")
    const data = await res.json()
    setApiData(data)
   }

   const slicedArray = apiData.slice(0, 8)
   
   console.log(basket);
   
  return (
    <section id='products'>
        <div className="categoriesTitle">
            <p>Our Products</p>
        </div>
        <div className="browsesByCategory">
            <h2>Explore Our Products</h2>
            <div className="arrowsCategory">
            <i class="fa-solid fa-arrow-left"></i>
            <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
        <div className="productsWrapper">
        {slicedArray.map(x=>(
            <div className="productCard" key={x.id}>
                <div className="productImgBox">
                <i class="fa-regular fa-eye"></i>
                <i class="fa-regular fa-heart"></i>
                    <img src={x.thumbnail} alt="" />
                <div className="addToCart">
                    <h3 onClick={()=>AddToBasket(x)}>Add To Cart</h3>
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
            </div>
        ))}
        </div>
        <div className="viewMoreBtn">
                <p>View all Products </p>
            </div>

    </section>
  )
}

export default Products;