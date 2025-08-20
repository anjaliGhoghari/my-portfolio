import React from "react";
import hero from "../assets/images/hero-back.png";
import resume from "../assets/Resume Anjali Ghoghari.pdf";
import AG from "../assets/icons/AG.svg";
import Header from "./Header";
import styles from "@/styles/style";

function HeroSection() {
  return (
    <section
      className="w-full  sm:bg-cover bg-contain bg-no-repeat sm:bg-center bg-revert-layer "
      style={{ backgroundImage: `url(${hero})` }}
    >
      <Header />
      <div className="flex relative items-center text-center justify-center">
        <h1
          className="sm:text-[252.594px]
          text-[92.594px] sm:leading-[196px] leading-[87px] sm:tracking-[-16px]
          tracking-[-6px] sm:mt-[528px] mt-[136px] font-geist"
          style={{
            background:
              "linear-gradient(0deg, #000 -12.49%, #321432 24.17%, #6B2B6B 51.54%, #B245B2 77.68%, #FF41FF 94.59%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Creative <br />
          Developer
        </h1>
        <img
          className="absolute sm:bottom-[45px] bottom-[37px] w-[230px] sm:w-auto"
          src={AG}
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-2 mb-16 px-4 ">
        <p className={`${styles.paragraph} text-center`}>
          I am a passionate frontend developer, skilled in crafting visually
          appealing, responsive, and user-friendly web interfaces. With
          expertise in react, tailwind CSS & modern CSS, I bring ideas to life
          with precision and creativity.
        </p>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <button
            className="text-white group hover:text-[#FF41FF]
   hover:border-[#FF41FF] mt-6 flex items-center justify-center border border-white leading-[13px] rounded-[32px] py-[6px] px-3 font-[380]"
          >
            <svg
              className="mr-1 group-hover:fill-[#FF41FF]"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="white"
            >
              <path
                d="M9.33333 1.16406L12.25 4.08073V12.2521C12.2498 12.4056 12.1887 12.5528 12.0801 12.6613C11.9715 12.7698 11.8243 12.8307 11.6707 12.8307H2.32925C2.17605 12.8297 2.02943 12.7684 1.92104 12.6601C1.81266 12.5518 1.75122 12.4053 1.75 12.2521V1.74273C1.75 1.42306 2.00958 1.16406 2.32925 1.16406H9.33333ZM7 6.70573C7.38677 6.70573 7.75771 6.55208 8.0312 6.27859C8.30469 6.0051 8.45833 5.63417 8.45833 5.2474C8.45833 4.86062 8.30469 4.48969 8.0312 4.2162C7.75771 3.94271 7.38677 3.78906 7 3.78906C6.61323 3.78906 6.24229 3.94271 5.9688 4.2162C5.69531 4.48969 5.54167 4.86062 5.54167 5.2474C5.54167 5.63417 5.69531 6.0051 5.9688 6.27859C6.24229 6.55208 6.61323 6.70573 7 6.70573ZM4.39075 9.91406H9.60925C9.53854 9.27146 9.23318 8.67756 8.7517 8.24615C8.27022 7.81475 7.64648 7.57619 7 7.57619C6.35352 7.57619 5.72978 7.81475 5.2483 8.24615C4.76682 8.67756 4.46146 9.27146 4.39075 9.91406Z"
                fill="auto"
              />
            </svg>
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
