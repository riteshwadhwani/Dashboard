import React from 'react'
import Header from '../components/Header'
import PieChart from '../components/PieChart'
const Pie = () => {
  return (
    <div>
        <div>
        <Header title={"PieChart"} description={"Simple Pie Chart"}/>
        </div>
        <div className='w-[1080px] h-[600px]'>
        <PieChart/>
        </div>
    </div>
  )
}

export default Pie