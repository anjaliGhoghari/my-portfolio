import styles from '../styles/style'
import React from 'react'
import multifli from '../assets/images/multifli.jpg'


function Links() {
  return (
     <section id='links' className={`${styles.paddindY}`}>
      <div className='container'>
        <h2 className={`${styles.heading2} text-gradient-heading font-mozilla`}>LINKS</h2>
        <p className={`${styles.paragraph} mt-5 max-w-[550px]`}>
        Here are some of my favorite links to explore. You can find my projects, blogs, and more on these platforms.
        </p>
        <div className="absolute z-[3] -left-1/2 top-0 w-[40%] h-[40%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[40%] h-[40%] -left-1/2 bottom-0 rounded-full pink__gradient" />
     
        <div className='flex flex-wrap gap-6
         justify-start items-center mt-14 '>
            <a href='https://mutipli-landing-page-private.vercel.app/' className='flex items-center justify-center border-[0.5px] border-white/30 bg-white/5 rounded-xl px-2 py-4'>
                <img src={multifli} alt='Multifli' className='max-w-[350px]'/>
            </a>
             <a href='https://mutipli-landing-page-private.vercel.app/' className='flex items-center justify-center border-[0.5px] border-white/30 bg-white/5 rounded-xl px-2 py-4'>
                <img src={multifli} alt='Multifli' className='max-w-[350px]'/>
            </a>
             <a href='https://mutipli-landing-page-private.vercel.app/' className='flex items-center justify-center border-[0.5px] border-white/30 bg-white/5 rounded-xl px-2 py-4'>
                <img src={multifli} alt='Multifli' className='max-w-[350px]'/>
            </a>
             <a href='https://mutipli-landing-page-private.vercel.app/' className='flex items-center justify-center border-[0.5px] border-white/30 bg-white/5 rounded-xl px-2 py-4'>
                <img src={multifli} alt='Multifli' className='max-w-[350px]'/>
            </a>
             <a href='https://mutipli-landing-page-private.vercel.app/' className='flex items-center justify-center border-[0.5px] border-white/30 bg-white/5 rounded-xl px-2 py-4'>
                <img src={multifli} alt='Multifli' className='max-w-[350px]'/>
            </a>
             <a href='https://mutipli-landing-page-private.vercel.app/' className='flex items-center justify-center border-[0.5px] border-white/30 bg-white/5 rounded-xl px-2 py-4'>
                <img src={multifli} alt='Multifli' className='max-w-[350px]'/>
            </a>

        </div>
        </div>
        </section>
     
  )
}

export default Links