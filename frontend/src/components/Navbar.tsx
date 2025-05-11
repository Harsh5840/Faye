import React from 'react'
import { Button } from './ui/button'
import { ModeToggle } from './mood-toggle'

const Navbar = () => {
  return (
    <nav className=' h-[10vh] w-full flex justify-between items-center border-b-2 border-amber-500'>
        <div className='logo'>
          <span>FAYE</span>
        </div>
        <div className='flex gap-6'>
        <ul className='flex gap-6'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
        <ModeToggle />
      <Button className='bg-amber-500 text-white'>Sign Up</Button>
      </div>
    </nav>
  )
}

export default Navbar