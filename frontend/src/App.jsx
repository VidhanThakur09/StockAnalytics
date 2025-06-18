import { useState } from 'react'


import HeroPage from './landing_page/home/HeroPage'
import AboutPage from './landing_page/about/AboutPage'
import PricingPage from './landing_page/pricing/PricingPage'
import ProductPage from './landing_page/products/ProductPage'
// import SignUp from './landing_page/signup/SignUp'
import SupportPage from './landing_page/support/SupportPage'
import Error404 from './landing_page/404Error'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import Login from "./landing_page/Login.jsx";
import Signup from "./landing_page/Signup.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
