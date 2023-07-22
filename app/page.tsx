'use client'

import Hero from '@/components/Hero'
import { HighlightGroup, HighlighterItem } from '@/components/Highlighter'
import Location from '@/components/Location'
import LocationAndMusic from '@/components/LocationAndMusic'
import { Particles } from '@/components/Particles'
import { Pricing } from '@/components/Pricing'
import Projects from '@/components/Projects'
import Socials from '@/components/Socials'
import Techs from '@/components/Techs'
import Tools from '@/components/Tools'


import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <Particles className="absolute inset-0 -z-10 w-full h-full " />
      <Particles className="absolute inset-0 -z-10 w-full h-full " />

      <Hero />

      <Projects />

      <Techs />

      <Tools />

      <LocationAndMusic />

      <Socials />
    </main>
  )
}
