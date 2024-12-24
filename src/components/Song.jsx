import React from 'react'
import Player from '../utilities/Player'
const Song = () => {
  return (
    <>
        <div className="preview__content__item p-1 text-center">
                <div className="player md:max-h-[20px] md:max-w-[170px]">
                    <Player/>
                </div>
                <div className="title mt-5">
                    <h3 className='text-[#d9c180]'>All Star - 130 BPM G Min</h3>
                </div>
            </div>
    </>
  )
}

export default Song