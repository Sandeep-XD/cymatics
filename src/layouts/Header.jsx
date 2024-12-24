import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Poster from '../utilities/Poster'

const Header = () => {
  return (
    <>
    <div className="nav-bar bg-[#111114] ">
        <Navbar/>
        <div className='md:h-1 bg-slate-100 lg:hidden'></div>
        <Hero/>
        <Poster/>
    </div>
    </>
  )
}

export default Header