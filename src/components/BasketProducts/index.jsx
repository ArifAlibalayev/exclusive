import React, { useContext } from 'react'
import './index.scss'
import { BasketContext } from '../../context/BasketProvider'

function BasketProducts() {
  const {basket, setBasket, increaseCount, decreaseCount, DeleteItem} = useContext(BasketContext)
  return (
    <section id='BasketProducts'>
        <p>Home / <span>Cart</span></p>
        <div className="basketTable">
          <div className="basketTitle">
            <h4>Product</h4>
            <h4>Price</h4>
            <h4>Quantity</h4>
            <h4>Subtotal</h4>
          </div>
          {basket.map(x=>(

            <div className="basketCard">
              <div className="basketImg">
              <img src={x.thumbnail} alt="" />
              </div>
              <div className="basketPrice">
                ${x.price}
              </div>
              <div className="basketCount">
                <p>{x.count}</p>
              </div>
              <div className="basketTotal">
                <p>${x.price*x.count}</p>
              </div>

            </div>
            
          ))}
        </div>
    </section>
  )
}

export default BasketProducts