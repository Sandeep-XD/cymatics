import React from 'react'
import Player from '../utilities/Player'
import Song from './Song'

const Preview = () => {
  return (
    <>
    <div className="preview bg-[#1c1d21] p-5 sm:mx-10 rounded-md">
        <div className="preview__heading text-center font-[500px] text-white text-[24px] md:text-[35px]">
            <h2 className='px-18'>PREVIEW SAMPLES
              <br className='md:hidden' />
              {" (Stems & MIDI included)"}
            </h2>
        </div>
        <div className="preview__content text-center flex flex-wrap justify-center mt-5 m-auto gap-2 px-3 py-5 md:max-w-[700px]">
            <Song/>
            <Song/>
            <Song/>
            <Song/>
            <Song/>
            <Song/>
        </div>
    </div>
    </>
  )
}

export default Preview