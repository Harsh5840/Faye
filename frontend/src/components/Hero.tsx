import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <div className='hero flex h-[90vh] max-w-screen'>
      <div className='text w-full flex ml-12 items-center gap-3'>
        <div className='side-bar h-[30vh] w-[2px] bg-amber-500 '></div>
        <div className='flex flex-col gap-3'>
        <h1 className='text-5xl font-bold'>
          Hi! I&apos;m Faye
        </h1>
        <p className='text-xl'>
          I&apos;m your personal study buddy. Hope over to the meeting room and get ready to learn!
        </p>
        <Button className='bg-amber-500 text-white gap-3 w-fit'>+ Start a Session</Button>
        <Button className='bg-amber-500 text-white gap-3 w-fit'>Get started</Button>
        </div>
      </div>
      <div className='image w-full relative flex justify-center items-center'>
            <div className='content-image aspect-square w-[65%] rounded-full bg-amber-500 animate-grow'></div>
      </div>
    </div>
  )
}

export default Hero