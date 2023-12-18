import React, { useContext } from "react";
import "./index.scss";
import { WishlistContext } from "../../context/WishlistProvider";
import { BasketContext } from "../../context/BasketProvider";

function WishlistProducts() {
  const { wishlist, setWishlist, AddToWishlist } = useContext(WishlistContext);
  const { basket, AddToBasket } = useContext(BasketContext);
console.log(wishlist);

  return (
    <section id="WishlistProducts">
      <div className="wishlistTitle">
        <h3>Wishlist ({wishlist.length}) </h3>
        <div className="moveAllToBag"></div>
      </div>
      <div className="wishlistSection">
        {wishlist.map((x) => (
          <div className="productCard" key={x.id}>
            <div className="productImgBox">
              <i class="fa-solid fa-trash" onClick={() => AddToWishlist(x)}></i>

              <img src={x.thumbnail} alt="" />
              <div className="addToCart">
                <h3 onClick={() => AddToBasket(x)}>Add To Cart</h3>
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
      <div className="browsesByCategory">
        <div className="categoriesTitle">
          <p>Wishlist</p>
        </div>
        <div className="viewAll">
          <p>View All</p>
        </div>
      </div>
    </section>
  );
}

export default WishlistProducts;
