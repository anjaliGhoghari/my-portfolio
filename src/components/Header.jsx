import { useState, useRef, useEffect } from "react";
import React from "react";
import name_logo from "../assets/icons/name_logo.svg";

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
  const navItems = [
  { label: "Showcase", href: "#showcase" },
  { label: "Technologies", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
  return (
    <>
      <header className="absolute sm:py-16 py-8 w-full">
        <div className="container flex justify-between items-center">
          <a className="cursor-pointer z-10" href="#">
            <img src={name_logo} className="w-[132px] sm:w-auto" />{" "}
          </a>

          <div className="relative flex gap-5 ">
            {/* Sliding Box */}
            <div
              className="hidden sm:block absolute bottom-0 h-[29px] rounded-[32px] border-[1px] border-[#FF41FF] transition-all duration-300"
              style={{
                width: `${boxStyle.width}px`,
                left: `${boxStyle.left}px`,
              }}
            ></div>
            {navItems.map((item, index) => (
              <a
                href={item.href}
                key={index}
                ref={(el) => (navRefs.current[index] = el)}
                onClick={() => setActiveIndex(index)}
                className={`hidden relative z-10 sm:flex text-base font-saans cursor-pointer py-[3px] px-3 transition-colors duration-300 ${
                  activeIndex === index
                    ? "text-[#FF41FF]"
                    : "text-white/35 hover:text-bgBlack"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
