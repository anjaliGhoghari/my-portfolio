import { useState, useRef, useEffect } from "react";
import React from 'react'
import name_logo from '../assets/icons/name_logo.svg'

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [boxStyle, setBoxStyle] = useState({});
  const navRefs = useRef([]);
  useEffect(() => {
    const current = navRefs.current[activeIndex];
    if (current) {
      setBoxStyle({
        width: current.offsetWidth,
        left: current.offsetLeft,
      });
    }
  }, [activeIndex]);
  return (
   <>
   <header className='absolute py-16 w-full'>
   <div className='container flex justify-between items-center'>
   <a className="cursor-pointer z-10" href='#'><img src={name_logo}/> </a>
    
    <div className="relative flex gap-5 ">
                {/* Sliding Box */}
                <div
    className="absolute bottom-0 h-[33px] rounded-[32px] border-[1px] border-[#FF41FF] transition-all duration-300"
                  style={{
                    width: `${boxStyle.width}px`,
                    left: `${boxStyle.left}px`,
                  }}
                ></div>
                {["Links", "Technologies","Contact"].map((item, index) => (
                  <a
                    href="#contact"
                    key={index}
                    ref={(el) => (navRefs.current[index] = el)}
                    onClick={() => setActiveIndex(index)}
                    className={`relative z-10 flex text-base font-saans cursor-pointer py-[5px] px-3 transition-colors duration-300 ${
                      activeIndex === index
                        ? "text-[#FF41FF]"
                        : "text-white/35 hover:text-bgBlack"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
   </div>
   
   </header>
   </>
  )
}

export default Header