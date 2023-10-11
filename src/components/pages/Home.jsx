import React from 'react'
import Footer from '../Footer'
import HeroSection from '../fragments/HeroSection'
import Header from '../Header'
import CollectionSection from '../fragments/Collection'
import ShopSection from '../fragments/ShopSection'
import FeatureSection from '../fragments/FeatureSection'

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

export default Home
