import React from 'react'
import '../css/style.css'
import Footer from '../Footer'
import HeroSection from '../fragments/HeroSection'
import Header from '../Header'
import CollectionSection from '../fragments/Collection'
import ShopSection from '../fragments/ShopSection'
import FeatureSection from '../fragments/FeatureSection'
import BlogSection from '../fragments/BlogSection'

function Home() {
  return (
    <div>
      <Header/>
      <main>
        <article>
          <HeroSection/>
          <CollectionSection/>
          <ShopSection/>
          <FeatureSection/>
          <BlogSection/>
        </article>
      </main>
      <Footer/>
    </div>
  )
}

export default Home;
