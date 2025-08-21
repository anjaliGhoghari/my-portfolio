import React from "react";
import AG from "../assets/icons/AG.svg";
import footerback from "../assets/icons/footer-back.svg";

function Footer() {
  return (
    <footer
      id="contact"
      className=" w-full bg-contain bg-no-repeat bg-center pb-4 "
      style={{ backgroundImage: `url(${footerback})` }}
    >
      <div className="container sm:py-[128px] py-[56px] sm:pb-[255px] pb-[166px]">
        <img
          className="sm:w-[366px] w-[195px] transform origin-left rotate-[4deg] sm:ml-[-20px] ml-[-10px]"
          src={AG}
        />
        <p className="font-mozilla tracking-[1px] text-white sm:text-4xl text-3xl font-medium mb-1">
          Your professional creative
          <br />
          developer is just around your corner!
        </p>
        <p className="font-[274] text-lg font-mozilla tracking-[-0.3px] text-white">
          Let’s give life to your next big project
        </p>
        <div className="flex justify-between items-center ">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=anjalighoghari79@example.com&su=New Project Opportunity&body=Hi Anjali,"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="text-white group hover:text-[#FF41FF]
       hover:border-[#FF41FF] mt-6 flex items-center justify-center border border-white leading-[13px] rounded-[32px] py-3 px-3 font-[380]"
            >
              📩 &nbsp; Let’s Build Something
            </button>
            <div className=" md:hidden mt-6 flex items-center gap-8 text-white/50 font-normal">
              <a href="https://x.com/Anjali_Ghoghari">X.com</a>
              <a href="https://www.linkedin.com/in/anjali-ghoghari-48829328b/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/anjaliGhoghari">Github</a>
            </div>
          </a>
          <div className=" hidden md:flex items-center gap-4 text-white/50 font-normal">
            <a href="https://x.com/Anjali_Ghoghari">X.com</a>
            <a href="https://www.linkedin.com/in/anjali-ghoghari-48829328b/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/anjaliGhoghari">Github</a>
          </div>
        </div>
      </div>
     <div className="overflow-hidden whitespace-nowrap w-full">
  <div className="flex animate-marquee">
    <h1 className="mr-8 flex-shrink-0 text-[clamp(2rem,8vw,20rem)] font-medium leading-[clamp(2.5rem,9vw,8rem)] tracking-[-1px] 
      bg-gradient-to-t from-black via-[#321432] via-[#6B2B6B] via-[#B245B2] to-[#FF41FF]
      bg-clip-text text-transparent">
      Creative Developer
    </h1>
    <h1 className="mr-8 flex-shrink-0 text-[clamp(2rem,8vw,20rem)] font-medium leading-[clamp(2.5rem,9vw,8rem)] tracking-[-1px] 
      bg-gradient-to-t from-black via-[#321432] via-[#6B2B6B] via-[#B245B2] to-[#FF41FF]
      bg-clip-text text-transparent">
      Creative Developer
    </h1>
    {/* duplicate for smooth loop */}
    <h1 className="mr-8 flex-shrink-0 text-[clamp(2rem,8vw,20rem)] font-medium leading-[clamp(2.5rem,9vw,8rem)] tracking-[-1px] 
      bg-gradient-to-t from-black via-[#321432] via-[#6B2B6B] via-[#B245B2] to-[#FF41FF]
      bg-clip-text text-transparent">
      Creative Developer
    </h1>
    <h1 className="mr-8 flex-shrink-0 text-[clamp(2rem,8vw,20rem)] font-medium leading-[clamp(2.5rem,9vw,8rem)] tracking-[-1px] 
      bg-gradient-to-t from-black via-[#321432] via-[#6B2B6B] via-[#B245B2] to-[#FF41FF]
      bg-clip-text text-transparent">
      Creative Developer
    </h1>
  </div>
</div>


    </footer>
  );
}

export default Footer;
