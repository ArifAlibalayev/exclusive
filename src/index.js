import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import BasketProvider, { BasketContext } from './context/BasketProvider';
import WishlistProvider from './context/WishlistProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BasketProvider>
      <WishlistProvider>
      <BrowserRouter>
    <App />
    </BrowserRouter>
      </WishlistProvider>
    </BasketProvider>
  </React.StrictMode>
);


