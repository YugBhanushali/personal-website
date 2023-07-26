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

const PreLoader = () => {
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
    <div>
      {
            isLoading 
            ?
            <div>
                <Spinner
                    size={"50"}
                />
            </div>
            :
            <div className='flex flex-col justify-center items-center'>
               <Hero />

                <Projects />

                <Techs />

                <Tools />

                <LocationAndMusic />

                <Contact />

                <Socials />

                <GithubAndResume />

                <Footer/> 
            </div>
      }
    </div>
  )
}

export default PreLoader
