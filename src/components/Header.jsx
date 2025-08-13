import React from 'react'

const Header = () => {
  return (
   <>
   <header className='pt-8 absolute z-50 w-full'>
   <div className='container'>
   <div className='border text-custom_gray border-gray-600 shadow rounded-2xl p-5 flex justify-between items-center'>
    <p className='text-2xl font-mozilla font-extralight '>ANJALI GHOGHARI</p>
    <div className='flex gap-5 z-20 font-mozilla '>
        <a href='#links'>LINKS</a>
        <a href='#skills'>TECHNOLOGY</a>
        <a href="#contact">CONTACT</a>
    </div>
   </div>

   </div>

   </header>
   </>
  )
}

export default Header