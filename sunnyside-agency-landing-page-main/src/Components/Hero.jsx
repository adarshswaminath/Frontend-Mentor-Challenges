import React from 'react'
import Navbar from "./Navbar"
import bgImage from "../assets/image-header.jpg"
import arrow from "../assets/icon-arrow-down.svg"
function Hero() {
  const backgroudImageStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  return (
    <div className='h-screen' style={backgroudImageStyle}>
      <Navbar/>
      <div className="flex flex-col items-center py-20">
        <h3 className="font-fraunces text-center font-bold text-4xl lg:text-5xl text-white tracking-wider uppercase">We are creatives</h3>
        <img 
          src={arrow} 
          className="py-20 hover:rotate-180 delay-300 transition ease-linear duration-300"
          alt="arrow image" />
      </div>
    </div>
  )
}

export default Hero