import React from 'react'
// import styles from '../styles/style'
import hero from '../assets/images/hero.png'
import Orb from '../../Hero.jsx/Orb/Orb'

function Hero() {
  return (
   <main>
  <div className="pb-[128px]">
    <div className="container relative" style={{ height: "900px" }}>
      {/* Orb Background */}
      <Orb
        hoverIntensity={0.24}
        rotateOnHover={true}
        hue={282}
        forceHoverState={false}
        style={{ position: "absolute", inset: 0 }}
      />
     <div className="absolute inset-0 bg-black/10 backdrop-blur-md -z-0"></div>
      {/* Hero Content */}
      <div className="absolute top-[6rem] gap-[124px] flex justify-between items-center w-[90%]">
        <div>
          <div className="text-gradient font-mozilla text-8xl leading-[6.5rem] text-left">
            FRONTEND <br /> DEVELOPER
          </div>
          <p className="max-w-[650px] font-mono text-custom_gray text-left mt-3 text-xl">
            I am a passionate frontend developer, skilled in crafting visually
            appealing, responsive, and user-friendly web interfaces. With
            expertise in
            <span className="text-custom_pink"> React, Tailwind, and modern CSS,</span>
            I bring ideas to life with precision and creativity.
          </p>
           <button className="btn btn-black group mt-12 ">My Resume</button>
        </div>
        <div className="relative">
          <img src={hero} className="w-[610px] p-[5px] rounded-full bg-gradient-to-r from-pink-200 via-pink-600 to-pink-100 shadow-[0_0_20px_rgba(255,105,180,0.7)]" alt="Hero" />
        </div>
        
      </div>
      
    </div>
  </div>
</main>

  )
}

export default Hero