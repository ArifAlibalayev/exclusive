import React, { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const WishlistContext = createContext();
function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);
  const [hearttoggle, setHearttoggle] = useLocalStorage("heartclass", false)

  function AddToWishlist(item) {
    const index = wishlist.findIndex((x)=> x.id === item.id)
    if (index === -1) {
      setWishlist([...wishlist, { ...item}])
      setHearttoggle(true)
    }
    else{
      setWishlist(wishlist.filter((x)=> x.id !== item.id))
      setHearttoggle(false)
    }
      
    
  }

  const wishlistValue = {
    wishlist,
    setWishlist,
    AddToWishlist,
    hearttoggle,
    setHearttoggle
  };

  return (
    <WishlistContext.Provider value={wishlistValue}>
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;
