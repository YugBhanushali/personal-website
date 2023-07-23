import React from 'react'
import Location from './Location'
import Music from './Music'

const LocationAndMusic = () => {
  return (
    <div className='flex flex-row items-center justify-center gap-10 mt-[100px]'>
      <div>
        <Location />
      </div>

      <div className='mr-5'>
        <Music />
      </div>
    </div>
  )
}

export default LocationAndMusic
