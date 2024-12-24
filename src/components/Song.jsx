import React from 'react'
import Player from '../utilities/Player'
const Song = () => {
  return (
    <>
        <div className="preview__content__item md:max-w-[200px] sm:h-[50px] md:m-3">
                <div className="player px-1 py-2 md:max-h-[112px] md:min-w-[220px]">
                    <Player/>
                </div>
                <div className="title">
                    <h3 className='text-[#d9c180]'>All Star - 130 BPM G Min</h3>
                </div>
            </div>
    </>
  )
}

export default Song