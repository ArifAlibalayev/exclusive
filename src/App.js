import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import MainPage from './pages/MainPage';
import BasketPage from './pages/BasketPage';
import WishlistPage from './pages/WishlistPage';

function App() {
  return (
    <>
    <Routes>
      <Route element={<MainLayout></MainLayout>}>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/Basket' element={<BasketPage/>}/>
        <Route path='/Wishlist' element={<WishlistPage/>}/>


      </Route>
    </Routes>
    </>
  );
}

export default App;
