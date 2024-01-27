import React from 'react'
import BarChart from '../components/BarChart'
import Header from '../components/Header'
const Bar = () => {
  return (
    <div className='flex flex-col'>
      <div className="h=[150px] w-fit">
      <Header/>
      </div>
      <div className='h-[600px] w-[1080px] flex justify-center items-center'><BarChart/></div>
    </div>
  
  )
}

export default Bar