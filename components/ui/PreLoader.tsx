'use client'
import { Spinner } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Hero from '../Hero'
import Projects from '../Projects'
import Techs from '../Techs'
import Tools from '../Tools'
import LocationAndMusic from '../LocationAndMusic'
import Socials from '../Socials'
import GithubAndResume from '../GithubAndResume'
import Footer from '../Footer'
import Contact from '../Contact'
import { Particles } from '../Particles'
import { isMobile } from 'react-device-detect'

const PreLoader = () => {
    const targetRef = React.useRef<HTMLDivElement | null>(null);
    const [isLoading, setIsLoading] = React.useState(true)

    useEffect(() => {
        const onPageLoad = () => {
            setIsLoading(false)
        }

        if(document.readyState === 'complete'){
            onPageLoad();
        }
        else{
            window.addEventListener('load', onPageLoad)

            return () => {
                window.removeEventListener('load', onPageLoad)
            }
        }

    }, [])
  return (
    <div className='flex flex-col justify-center items-center'>
      {
            isLoading 
            ?
            <div className='mt-[300px]'>
                <Spinner
                    height={30}
                    width={30}
                />
            </div>
            :
            <div ref={targetRef} className='flex flex-col justify-between items-center'>
                <div className='flex flex-col justify-between w-full items-center'>
                    {isMobile
                    ?
                        <Particles quantity={200} containerRef={targetRef} className="absolute inset-0 -z-10 w-full h-full " />
                    :
                        <Particles quantity={400} containerRef={targetRef} className="absolute inset-0 -z-10 w-full h-full" />
                    }

                    <Hero />

                    <Projects />

                    <Techs />

                    <Tools />

                    <LocationAndMusic />

                    <Contact />

                    <Socials />

                    <GithubAndResume />

                    <Footer />
                </div>
            </div>
      }
    </div>
  )
}

export default PreLoader
