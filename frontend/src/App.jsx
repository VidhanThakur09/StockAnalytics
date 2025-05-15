import { useState } from 'react'


import HeroPage from './landing_page/home/HeroPage'
import AboutPage from './landing_page/about/AboutPage'
import PricingPage from './landing_page/pricing/PricingPage'
import ProductPage from './landing_page/products/ProductPage'
import SignUp from './landing_page/signup/SignUp'
import SupportPage from './landing_page/support/SupportPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroPage/>
      
      {/* <AboutPage/>
      <PricingPage/>
      <ProductPage/>
      <SignUp/>
      <SupportPage/> */}
    </>
  )
}

export default App
