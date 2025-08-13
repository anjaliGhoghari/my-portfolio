import React from 'react'
import styles from '../styles/style'
import figma from '../assets/icons/figma.svg'
import css from '../assets/icons/css-3.svg'
import framer from '../assets/icons/framer.svg'
import git from '../assets/icons/git.svg'
import html from '../assets/icons/html.svg'
import js from '../assets/icons/js.svg'
import laravel from '../assets/icons/laravel.svg'
import mysql from '../assets/icons/mysql.svg'
import npm from '../assets/icons/npm.svg'
import php from '../assets/icons/php.svg'
import react from '../assets/icons/react.svg'
import sass from '../assets/icons/sass.svg'
import tailwind from '../assets/icons/tailwind.svg'
import vercel from '../assets/icons/vercel.svg'
const skills =[
  {
    id:1,
    name:'Figma',
    icon: figma,
  },
  {
    id:2,
    name:'CSS',
    icon: css,
  },
  {
    id:3,
    name:'Framer',
    icon: framer,
  },
  {
    id:4,
    name:'Git & GitHub',
    icon: git,
  },
  {
    id:5,
    name:'HTML',
    icon: html,
  },
  {
    id:6,
    name:'JS',
    icon: js,
  },
  {
    id:7,
    name:'Laravel',
    icon: laravel,
  },
  {
    id:8,
    name:'MySQL',
    icon: mysql,
  },
  {
    id:9,
    name:'NPM',
    icon: npm,
  },
   {
    id:10,
    name:'php',
    icon: php,
  },
   {
    id:11,
    name:'React.js',
    icon: react,
  },
   {
    id:12,
    name:'Sass',
    icon: sass,
  },
  {
    id:13,
    name:'Tailwind',
    icon: tailwind,
  },{
    id:14,
    name:'Vercel',
    icon: vercel,
  },


]

function Skills() {
  return (
    <section id='skills' className={`${styles.paddindY}`}>
      <div className='container'>
        <h2 className={`${styles.heading2} text-gradient-heading font-mozilla`}>SKILLS</h2>
        <p className={`${styles.paragraph} mt-5 max-w-[550px]`}>
          The skills, tools and technologies I use to build web applications.
        </p>
      <div className="absolute z-[3] left-[85%] top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] left-[85%] bottom-0 rounded-full pink__gradient" />
     
      <div className='mt-14'>
        <div className='flex flex-wrap justify-start items-center gap-2'>
        {skills.map((skill)=>(
          <div className='flex items-center justify-between border-[0.5px] border-white/30 bg-white/5 rounded-full px-4 py-2 '>
          <img src={skill.icon} alt={skill.name} className='max-w-[30px]'/>
          <p className='text-white ml-2 text-lg font-mozilla'>{skill.name}</p>
          </div>
          ))}
        </div>
      </div>
 </div>
    </section>
  )
}
export default Skills
