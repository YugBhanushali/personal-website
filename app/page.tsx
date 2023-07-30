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


export default function Home() {

  return (
    <main  className="flex flex-col items-center justify-between px-24">
        <PreLoader />
    </main>
  )
}
