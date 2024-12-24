import React from 'react'

const Poster = () => {
  return (<>
    <div className='px-10 py-10'>
        <img className='w-fit h-full pt-[40px] py-[50px] px-[130px] hidden md:block' src="./src/assets/posters/Analog_Evolution_Group_Desktop.webp" alt="poster" />
    </div>
    <div className='md:hidden px-5 py-10 pt-0'>
        <img src="./src/assets/posters/Analog_Evolution_Group_Mobile.webp" alt="poster" />
    </div>
  </>
  )
}

export default Poster