import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'
export default function ProductPage() {
  return (
    <>
        <Hero />
        <LeftSection imageUrl="images/kite.png" productName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="#" learnMore="#" googlePlay="#" appStore="#" />
        <RightSection imageUrl="images/console.png" productName="Console" productDescription="The central dashboard for your Stoxight account. Gain insights into your trades and investments with in-depth reports and visualisations." tryDemo="#" />
      <LeftSection
        imageUrl="images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="#"
        googlePlay="#"
        appStore="#"
      />
      <RightSection
        imageUrl="images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo="#"
      />
      <LeftSection
        imageUrl="images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay="#"
        appStore="#"
      />
       <p className="text-center mt-5 mb-5" style={{"fontSize":"1.25rem","lineHeight":"1.8" ,"fontWeight":"400" , "marginTop":"10px"}}>
        Want to know more about our technology stack? Check out the <a style={{"textDecoration":"none"}} href="https://Stoxight.tech">Stoxight.tech</a> blog.
      </p>
        <Universe />
    </>
  )
}