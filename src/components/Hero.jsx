import React from "react";
import hero from "../assets/images/hero.png";
import LightRays from "../../Hero.jsx/LightRays/LightRays";
import graphic from "../assets/images/multipli.png";
import Header from "./Header";

function Hero() {
  return (
    <main>
      <div className="pb-[128px]">
        <div className="container relative min-h-[900px]" style={{ height: "100px" }}>

          <LightRays
            raysOrigin="top-center"
            raysColor="#f75FDD"
            raysSpeed={1.5}
            lightSpread={1}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            fadeDistance={1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            style={{ position: "absolute", inset: 0 }}
          />
          <div className="absolute top-[13rem] gap-[124px] flex justify-between items-center w-[90%]">
            <div>
              <div className="text-gradient  font-mozilla text-8xl leading-[6.5rem] text-left">
                FRONTEND <br /> DEVELOPER
              </div>
              <p className="max-w-[650px] font-mono text-custom_gray text-left mt-3 text-xl">
                I am a passionate frontend developer, skilled in crafting
                visually appealing, responsive, and user-friendly web
                interfaces. With expertise in
                <span className="text-custom_pink">
                  {" "}
                  React, Tailwind, and modern CSS,{" "}
                </span>
                I bring ideas to life with precision and creativity.
              </p>
              <button className="btn btn-black group mt-12 ">My Resume </button>
            </div>
            <div className="relative">
              <img
                src={hero}
                className="w-[610px] p-[5px] rounded-full bg-gradient-to-r from-pink-200 via-pink-600 to-pink-100 shadow-[0_0_20px_rgba(255,105,180,0.7)]"
                alt="Hero"
              />
              <div className="border-2 absolute left-[48px] bottom-[-38px]  border-custom_pink rounded-full">
                <img
                  src={graphic}
                  className="sm:max-w-[150px] max-w-[50px] spinImage "
                />
              </div>
            </div>
          </div>
          <div className="text white">wbhwbewbkewcbewk</div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
