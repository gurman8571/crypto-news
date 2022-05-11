import React from 'react'
import '../App.css'
import Craousel from './Craousel'

export default function Banner() {
  return (
    
    <div className="banner bg-gray-700 w-screen">
     
    <div className="flex-column">
    <div className=" px-8 pt-20 flex justify-center items-center">
        <p className=" shadow-lg text-6xl font-extrabold">Crypto News</p>
</div>
<div className="   flex justify-center items-center">
        <p className=" p-2 text-sm capitalize font-light text-gray-300">get info regarding your favourite bitcoin here</p>
</div>
    </div>
<Craousel/>
    </div>

  )
}

