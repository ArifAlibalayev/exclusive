import React from 'react'
import Hero from '../../components/Hero'
import Categories from '../../components/Categories'
import BannerSection from '../../components/Banner'
import Products from '../../components/Products'
import CarouselSection from '../../components/Carousel'
import BestSelling from '../../components/BetsSelling'
import FeaturedSection from '../../components/Featured'

function MainPage() {
  return (
    <>
    <Hero/>
    <CarouselSection/>
    <Categories/>
    <BestSelling/>
    <BannerSection/>
    <Products/>
    <FeaturedSection/>
    </>
  )
}

export default MainPage