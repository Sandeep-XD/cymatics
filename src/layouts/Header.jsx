import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Poster from '../utilities/Poster'

const Header = () => {
  return (
    <>
    <div className="nav-bar bg-[#111114]">
      <div className="nav-top sticky top-0 z-10">
        <Navbar/>
      </div>
        <div className='md:h-1 bg-slate-100 lg:hidden'></div>
      <div className="nav-down">
        <Hero/>
        <Poster/>
      </div>
    </div>
    </>
  )
}

export default Header