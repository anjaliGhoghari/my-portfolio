import React from 'react'

const Header = () => {
  return (
   <>
   <header className='py-8'>
   <div className='container'>
   <div className='border text-custom_gray border-gray-500 shadow rounded-2xl p-5 flex justify-between items-center'>
    <p className='text-2xl font-mozilla font-extralight '>ANJALI GHOGHARI</p>
    <div className='flex gap-5  font-mozilla '>
        <a href='#'>LINKS</a>
        <a href='#'>TECHNOLOGY</a>
        <a href='#'>CONTACT</a>
    </div>
   </div>

   </div>

   </header>
   </>
  )
}

export default Header