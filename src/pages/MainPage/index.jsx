import React from 'react'
import Hero from '../../components/Hero'
import Categories from '../../components/Categories'
import BannerSection from '../../components/Banner'
// import Carousel from '../../components/Carousel'

function MainPage() {
  return (
    <>
    <Hero/>
    {/* <Carousel/> */}
    <Categories/>
    <BannerSection/>
    </>
  )
}

export default MainPage