import React from 'react'
import logo from '../public/PW-logo.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex sticky top-0 items-center justify-center bg-white bg-opacity-[0.02] backdrop-blur-[3px] py-2 z-30'>
        <Image
            src={logo}
            alt='Picture of the author'
            width={50}
            height={50}
        />
    </div>
  )
}

export default Navbar
