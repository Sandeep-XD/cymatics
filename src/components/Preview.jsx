import React from 'react'
import Player from '../utilities/Player'
import Song from './Song'

const Preview = () => {
  return (
    <>
    <div className="preview bg-[#1c1d21] pt-3 sm:mx-10">
        <div className="preview__heading w-full text-center text-white">
            <h2>PREVIEW SAMPLES</h2>
            <p>{"(Stems & MIDI included)"}</p>
        </div>
        <div className="preview__content text-center p-5 flex flex-wrap justify-center lg:max-w-[800px] m-auto">
            <Song/>
            <Song/>
            <Song/>
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