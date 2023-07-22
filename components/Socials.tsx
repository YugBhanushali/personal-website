import React from 'react'
import SectionDivider from './SectionDivider'
import { socialLinks } from '@/utils/Constants'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

//make a icon component which takes the app name and return the react-icons component

const Icon = ({name}:{name:string}) => {
    if(name === "Twitter"){
        return(
            <BsTwitter  
                className='text-[#1DA1F2] text-[30px] hover:text-[#1DA1F2] transition-all duration-300 ease-in-out'
            />
        )
    }
    else if(name === "Github"){
        return(
            <BsGithub
                className='text-[#fff] text-[30px] hover:text-[#fff] transition-all duration-300 ease-in-out'
            />
        )
    }
    else if(name === "LinkedIn"){
        return(
            <BsLinkedin
                className='text-[#0A66C2] text-[30px] hover:text-[#0A66C2] transition-all duration-300 ease-in-out'
            />
        )
    }
}

const Socials = () => {
  return (
    <div className='flex flex-col'>
        <div>
            <SectionDivider
                sectionName="Socials"
                className='rounded-3xl hover:border-zinc-500 transition-all duration-300 ease-in-out my-[80px]'
            />
        </div>

        <div className='flex flex-row'>
            {socialLinks.map((social, index) => {
                return(
                    <div 
                        key={social.id}
                        className='flex justify-center items-center rounded-3xl bg-white bg-opacity-[0.1] backdrop-blur-[3px] p-2 mx-2 hover:bg-white hover:bg-opacity-[0.16] transition-all duration-300 ease-in-out'
                    >
                        <Icon name={social.name} />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Socials
