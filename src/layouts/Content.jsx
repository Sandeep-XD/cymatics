import React from 'react'
import Preview from '../components/Preview'

const Content = () => {
  return (
    <>
        <div className="content bg-[#111114]">
            <div className="content__inner px-5 rounded-lg py-5">
                <Preview/>
            </div>
        </div>
    </>
  )
}

export default Content