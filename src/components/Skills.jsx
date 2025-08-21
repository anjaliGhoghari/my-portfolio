import React from "react";
import styles from "@/styles/style";
import skillback from "../assets/icons/skillback.svg";
import figma from "../assets/icons/figma.svg";
import css from "../assets/icons/css-3.svg";
import framer from "../assets/icons/framer.svg";
import git from "../assets/icons/git.svg";
import html from "../assets/icons/html.svg";
import js from "../assets/icons/js.svg";
import laravel from "../assets/icons/laravel.svg";
import mysql from "../assets/icons/mysql.svg";
import npm from "../assets/icons/npm.svg";
import php from "../assets/icons/php.svg";
import react from "../assets/icons/react.svg";
import sass from "../assets/icons/sass.svg";
import tailwind from "../assets/icons/tailwind.svg";
import logofigma from "../assets/images/figma.png";
import logocss from "../assets/images/css.png";
import logoframer from "../assets/images/framer.png";
import logogit from "../assets/images/git.png";
import logohtml from "../assets/images/html.png";
import logolaravel from "../assets/images/laravel.png";
import logomysql from "../assets/images/mysql.png";
import logonpm from "../assets/images/npm.png";
import logophp from "../assets/images/php.png";
import logoreact from "../assets/images/react.png";
import logosass from "../assets/images/sass.png";
import logotailwind from "../assets/images/tailwind.png";

const skills = [
  {
    id: 1,
    name: "Figma",
    icon: figma,
  },
  {
    id: 2,
    name: "CSS",
    icon: css,
  },
  {
    id: 3,
    name: "Tailwind",
    icon: tailwind,
  },
  {
    id: 4,
    name: "Git & GitHub",
    icon: git,
  },
  {
    id: 5,
    name: "HTML",
    icon: html,
  },
  {
    id: 6,
    name: "JS",
    icon: js,
  },
  {
    id: 7,
    name: "React.js",
    icon: react,
  },
  {
    id: 8,
    name: "Sass",
    icon: sass,
  },
  {
    id: 9,
    name: "NPM",
    icon: npm,
  },
  {
    id: 10,
    name: "php",
    icon: php,
  },
  {
    id: 11,
    name: "Laravel",
    icon: laravel,
  },
  {
    id: 12,
    name: "MySQL",
    icon: mysql,
  },
  {
    id: 13,
    name: "Framer",
    icon: framer,
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className={` w-full bg-cover bg-center bg-no-repeat }`}
      style={{ backgroundImage: `url(${skillback})` }}
    >
      <div className={`${styles.paddindY} container`}>
        <div className="flex justify-center items-start flex-col  ">
          <h2 className={styles.heading2}>Skills</h2>
          <p className={`${styles.paragraph} pt-3 pb-8 `}>
            Tools and technologies I use to build web applications.
          </p>
          <div className="flex justify-between items-center">
            <div className="flex flex-wrap max-w-[800px] justify-start items-center gap-2">
              {skills.map((skill) => (
                <div className="flex  items-center justify-between  bg-white/10 rounded-full px-3 py-[6px] ">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="max-w-[20px]"
                  />
                  <p className="text-white ml-2 font-mozilla">{skill.name}</p>
                </div>
              ))}
            </div>
            <div className="relative ml-20 mt-[-95px] hidden  ">
              <img
                className="max-w-[70px] absolute top-[-261px] left-[78px] animate-float will-change-transform drop-shadow [animation-delay:0s]"
                src={logosass}
              />
              <img
                className="max-w-[150px] absolute top-[-165px] left-[170px] animate-float [animation-delay:1s]"
                src={logoreact}
              />
              <img
                className="max-w-[90px] absolute top-[-258px] left-[354px] animate-float [animation-delay:2s]"
                src={logonpm}
              />
              <img
                className="max-w-[77px] absolute top-[-153px] left-[520px] animate-float [animation-delay:3s]"
                src={logomysql}
              />
              <img
                className="max-w-[130px] absolute top-[-82px] left-[388px] animate-float [animation-delay:4s]"
                src={logotailwind}
              />
              <img
                className="max-w-[140px] absolute top-[18px] left-[81px] animate-float [animation-delay:5s]"
                src={logohtml}
              />
              <img
                className="max-w-[61px] absolute top-[61px] left-[277px] animate-float [animation-delay:6s]"
                src={logogit}
              />
              <img
                className="max-w-[100px] absolute top-[-8px] left-[540px] animate-float [animation-delay:7s]"
                src={logofigma}
              />
              <img
                className="max-w-[80px] absolute top-[-82px] animate-float [animation-delay:8s]"
                src={logoframer}
              />
              <img
                className="max-w-[80px] absolute top-[182px] left-[23px] animate-float [animation-delay:9s]"
                src={logophp}
              />
              <img
                className="max-w-[85px] absolute top-[226px] left-[226px] animate-float [animation-delay:10s]"
                src={logolaravel}
              />
              <img
                className="max-w-[114px] absolute top-[134px] left-[400px] animate-float [animation-delay:11s]"
                src={logocss}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
