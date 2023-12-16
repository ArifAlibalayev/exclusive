import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
    <Routes>
      <Route element={<MainLayout></MainLayout>}>
        <Route path='/' element={<MainPage/>}/>

      </Route>
    </Routes>
    </>
  );
}

export default App;
