import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import "./index.scss"

function MainLayout() {
  return (
    <>
    <Header/>
    <Outlet></Outlet>
    <Footer/>
    </>
    
  )
}

export default MainLayout