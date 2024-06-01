import React from 'react'
import Image from 'next/image'
import ThemeChanger from './themeChanger'
const Header = () => {
  return (
    <div className='p-16  flex w-full justify-between'>
       <div className=''>
        <Image
        src="/logo.svg"
        alt='logo'
        width={20}
        height={20}
        />
       </div>
       <div className=''>
        <ul className='flex space-x-8'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li><ThemeChanger/></li>

        </ul>
        </div>
    </div>
  )
}

export default Header