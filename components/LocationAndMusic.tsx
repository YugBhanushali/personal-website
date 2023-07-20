import React from 'react'
import Location from './Location'
import Music from './Music'

const LocationAndMusic = () => {
  return (
    <div className='flex flex-row gap-10 mt-[100px]'>
      <Location />

      <Music />
    </div>
  )
}

export default LocationAndMusic
