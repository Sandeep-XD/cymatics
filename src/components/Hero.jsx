import React from 'react'
import Player from '../utilities/Player'

const Hero = () => {
  return (
    <div className='hero-section '>
        <div className="hero flex-col px-[24px] sm:px-[52px] ">
            <div className="hero-poster h-[64px] w-full ">
                <img className='w-[250px] antialiased mx-auto md:w-[500px] sm:w-[250px]' src="./src/assets/posters/Analog_Evolution_header.webp" alt="" />
            </div>
            <div className="hero-content md:pt-16">
                <div className="heading-text w-full h-[43px] px-auto ">
                    <h1 className="antialiased text-white font-[500] text-center text-[18px] h-[43px] px-5 md:h-[58px] font-hero lg:text-2xl">A Sonic Experience Crafted With Iconic <br className='hidden md:block' /> Analog Synthesizers & Hardware</h1>
                </div>
                <div className="beat-preview w-full mx-auto md:w-[440px] h-16 content-center pt-3">
                    <Player/>
                </div>
                <div className="check-btn w-full mx-auto pt-[30px] pb-0 md:w-[380px] md:h-[70] ">
                    <button className="bg-[#dbad37] text-white h-[70px] w-full font-body rounded-lg ">Check Availability</button>
                </div>
                <div className="info-para w-full">
                    <p className="text-red-500 font-bold italic text-center font-heading pt-2">Only 1,000 Licenses Are Available.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero