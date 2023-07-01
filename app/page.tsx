'use client'

import Hero from '@/components/Hero'
import { HighlightGroup, HighlighterItem } from '@/components/Highlighter'
import { Particles } from '@/components/Particles'
import { Pricing } from '@/components/Pricing'
import Projects from '@/components/Projects'
// import { Features } from '@/components/Pricing'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Particles className="absolute inset-0 -z-10 " />
      <Particles className="absolute inset-0 -z-10 " />
      <Particles className="absolute inset-0 -z-10 " />
      <Particles className="absolute inset-0 -z-10 " />
      <Particles className="absolute inset-0 -z-10 " />

      <Hero />
      <Projects />

    </main>
  )
}
