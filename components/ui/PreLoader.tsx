'use client'
import { Spinner } from '@chakra-ui/react'
import React, { useEffect, useLayoutEffect } from 'react'
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
import { MobileParticles } from './MobileParticles'

function getWindowDimensions(currRef?: any) {
    const refDimensions = currRef?.current?.getBoundingClientRect();
    const clientWidth = refDimensions?.width;
    const clientHeight = refDimensions?.height;
    return {
        width : clientWidth,
        height : clientHeight
    }
}

const PreLoader = () => {
    const targetRef = React.useRef<any>(null);
    const [isLoading, setIsLoading] = React.useState(true)
    const [screenSize, setScreenSize] = React.useState<{width: number, height: number}>(getWindowDimensions(targetRef))

    

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

        handleScreen();        
    }, [])

    const handleScreen = () => {
        setScreenSize({
            width: window.innerWidth || 0,
            height: 5300 || 0
        })
        console.log('screenSize', screenSize);
    }


  return (
    <div id='testing' className='flex flex-col justify-center items-center'>
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
                        <MobileParticles containerRef={targetRef} quantity={400} height={screenSize.height} width={screenSize.width} className='absolute -z-10 inset-0' />
                        :
                        <Particles quantity={400} className="absolute inset-0 -z-10 w-full h-full " />
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
