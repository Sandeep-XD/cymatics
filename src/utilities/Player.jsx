import React from 'react'

const Player = () => {
  return (
    <div className='audio-player flex'>
        <div className="play-btn content-center px-2">
            <img className='w-[65px] invert' src="./src/assets/ui-icon/play.svg" alt="" />
        </div>
        <div className="wave-form">
            <img className='' src="./src/assets/ui-icon/wave.png" alt="" />
        </div>
    </div>
  )
}

export default Player