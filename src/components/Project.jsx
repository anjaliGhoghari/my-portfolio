import styles from '@/styles/style'
import React from 'react'
import multipli from "../assets/images/multipli.png"
import winnr from "../assets/images/Winnr.png"
import usability from "../assets/images/usability.png"
import mindblow from "../assets/images/MindBlow.png"
import roboo from "../assets/images/3d.png"
import mozak from "../assets/images/Mozak.png"
import copperx from "../assets/images/copperx.png"
import epercel from "../assets/images/epercel.png"
import waxy from "../assets/images/waxy.png"
import scratch from "../assets/images/scratch.png"
const topProjects = [
  {
    title: "Multipli - Make Institutional Grade Yield on any asset",
    description: "A modern responsive landing page with Reactjs & Tailwind.",
    image:multipli,
    link: "https://mutipli-landing-page-private.vercel.app/",
  },
  {
    title: "Winnr - Fantasy Contests for Crypto Narratives",
    description: "Attractive responsive and smooth landing page with Reactjs & Tailwind.",
    image: winnr,
    link: "https://new-demo-winnr-landing-page.vercel.app/",
  },
  {
    title: "UsabilityHub - A remote user research platform",
    description: "Responsive and modern landing page with Reactjs & Tailwind.",
    image: usability,
    link: "https://usability-landing-page-new.vercel.app/",
  },
  {
    title: "HooBank - Next generation payment method",
    description: "User friendly responsive and modern landing page with Reactjs & Tailwind.",
    image: mindblow,
    link: "https://mind-blow-landing-page.vercel.app/",
  },

];

const otherProjects = [
  { title: "3D Hero Header", description: "Learning project", image: roboo, link: "https://3d-landing-page-delta.vercel.app/" },
  { title: "Mozak", description: "Learning project", image: mozak, link: "https://mozak-landing-page.vercel.app/" },
  { title: "Copperx", description: "Learning project", image: copperx, link: "https://copperx-demo-landing-page.vercel.app/" },
  { title: "E-percel", description: "Learning project", image: epercel , link: "https://e-percel-landing-page.vercel.app/" },
  { title: "Waxy-3d", description: "Learning project", image: waxy, link: "https://waxy3-d-landing-page.vercel.app/" },
  { title: "Scratch", description: "Learning project", image: scratch, link: "https://scratch-landing-page.vercel.app/" },
];
function Project() {
  return (
    <section id='showcase' className={styles.paddindY}>
    <div className='container'>
        <h2 className={styles.heading2}>Projects that i’ve worked on</h2>
        <p className={`${styles.paragraph} pt-1 sm:pb-16 pb-8`}>Here are some of my favorite Projects to explore.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-6 gap-3 sm:mb-6 mb-3" >
    {topProjects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group rounded-[8px] border border-[#282828] p-4 bg-white overflow-hidden shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full sm:h-[300px] h-[192px] transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-2xl text-center font-semibold max-w-[300px] text-white">{project.title}</h3>
              <p className="text-gray-300 mt-2 max-w-[400px] text-center">{project.description}</p>
            </div>
          </a>
        ))}
        </div>
         <div className="grid grid-cols-2 md:grid-cols-4 sm:gap-6 gap-3">
        {otherProjects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group rounded-[8px] overflow-hidden border border-[#282828]  "
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full sm:h-[165px] h-[107px] object-contain transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-gray-400 text-center text-sm">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
    </section>
  )
}

export default Project