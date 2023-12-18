import React, { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const BasketContext = createContext();
function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);

  function AddToBasket(item) {
    const index = basket.findIndex((x)=> x.id === item.id);
    if (index === -1) {
      setBasket([...basket, { ...item, count: 1 }]);
    } else {
      basket[index].count++;
      setBasket([...basket]);
    }
  }

  function increaseCount(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    basket[index].count++;
    setBasket([...basket]);
  }
  function decreaseCount(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    if (basket[index].count === 1) {
      return;
    }
    basket[index].count--;
    setBasket([...basket]);
  }

  function DeleteItem(item) {
    // const index = basket.findIndex((x) => x.id === item.id);
    setBasket(basket.filter((x)=>x.id !== item.id))
  }

  const basketValue = {
    basket,
    setBasket,
    AddToBasket,
    increaseCount,
    decreaseCount,
    DeleteItem
  };

  return (
    <BasketContext.Provider value={basketValue}>
      {children}
    </BasketContext.Provider>
  );
}

export default BasketProvider;
