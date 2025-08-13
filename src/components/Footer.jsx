import React from "react";
import styles from "../styles/style";

function Footer() {
  return (
    <footer id="contact" className="pt-[128px]">
      <div className="container">
        <h2 className={`${styles.heading2} text-gradient-heading font-mozilla`}>
          CONTACT
        </h2>
        <div className="flex justify-between gap-11 items-start border mt-14 text-custom_gray border-gray-600 shadow rounded-2xl p-5">
          <div className=" flex flex-col items-start justify-center ">
            <div className="flex justify-between items-center border border-gray-600 rounded-full py-1 px-3 gap-2">
              <div className="size-[8px] bg-green-300 rounded-full motion-preset-pulse motion-duration-1000"></div>
              Available for work
            </div>
            <div className="font-mozilla text-6xl leading-[4.5rem] mt-3 text-left">
              LET'S CREATE YOUR <br /> NEXT
              <span className="text-gradient "> BIG IDEA...</span>
            </div>
          </div>
          <div className="flex">kdbked</div>
          
        </div>
        <p class="mb-16 text-center text-custom_gray my-5 text-sm sm:mb-0 sm:text-left">
            © 2025 Anjali Ghoghari. All rights reserved.
          </p>
      </div>
    </footer>
  );
}

export default Footer;
