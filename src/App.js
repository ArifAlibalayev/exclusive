import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import MainPage from './pages/MainPage';
import BasketPage from './pages/BasketPage';

function App() {
  return (
    <>
    <Routes>
      <Route element={<MainLayout></MainLayout>}>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/Basket' element={<BasketPage/>}/>

      </Route>
    </Routes>
    </>
  );
}

export default App;
