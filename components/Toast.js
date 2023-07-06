import React from 'react'

export default function Toast() {
  return (
    <div id='toast' className="flex flex-col bg-transparent fixed text-center w-full items-center  ">
        <div className="flex flex-col p-5 rounded-3xl text-center bg-violet-950 toast">
        <h1 className='md:text-[1.4vw]  text-[4vw]   text-[#DF6A50] text-center '>
            Successfully Registered!
        </h1>
        </div>
    </div>
  )
}
