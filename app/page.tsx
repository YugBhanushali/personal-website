'use client'

import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import GithubAndResume from '@/components/GithubAndResume'
import Hero from '@/components/Hero'
import LocationAndMusic from '@/components/LocationAndMusic'
import { Particles } from '@/components/Particles'
import Projects from '@/components/Projects'
import Socials from '@/components/Socials'
import Techs from '@/components/Techs'
import Tools from '@/components/Tools'
import PreLoader from '@/components/ui/PreLoader'
import { useRef } from 'react'
import { isMobile } from 'react-device-detect'

export default function Home() {

  const targetRef = useRef<HTMLDivElement>(null)
  return (
    <main  className="flex flex-col items-center justify-between px-24">
      <div ref={targetRef} className="flex flex-col items-center justify-between">
          {
            isMobile 
            ?
            <Particles quantity={100} containerRef={targetRef} className="absolute inset-0 -z-10 w-full h-full " />
            :
            <Particles quantity={400} containerRef={targetRef} className="absolute inset-0 -z-10 w-full h-full " />
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
    </main>
  )
}
