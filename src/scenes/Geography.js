import React from 'react'
import Header from '../components/Header'
import RedialBar from '../components/RedialBar'

const Geography = () => {
  return (
    <div>
    <div className='w-full'>
        <Header title={"RedialBar"}/>
    </div>
    <div className="w-[1080px] h-[600px]">
        <RedialBar/>
    </div>
    
    </div>
  )
}

export default Geography