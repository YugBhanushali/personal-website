import React from 'react'
import { Abril_Fatface, Andika, Arvo, Lato } from 'next/font/google'
import Link from 'next/link'

const arvo = Lato({
    display: 'swap',
    subsets: ["latin"],
    weight: ["400", "900"],
})

const Footer = () => {
  return (
    <div className={`flex flex-col justify-center items-center mt-10 mb-2`}>
        <p
            className='text-transparent text-[80px] font-bold border-1 border-white bg-clip-text bg-gradient-to-r from-[#7700ff] to-[#6f0066]  duration-300 ease-in-out'
        >
            Yug Bhanushali
        </p>

      <div>
        <p className='text-[#ffffffa1] hover:text-gray-100 duration-500 ease-in-out text-[15px]'>
            All rights reserved. © {new Date().getFullYear()} Yug Bhanushali
        </p>
      </div>
    </div>
  )
}

export default Footer
