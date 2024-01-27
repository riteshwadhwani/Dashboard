import React from 'react'
import Header from '../components/Header'
import LiveChart from '../components/LiveChart'

const Live = () => {
  return (
    <div>
    <div>
    <Header/>
    </div>
    <div className='w-[1080px] h-[600px]'>
    <LiveChart/>
    </div>
    </div>
  )
}

export default Live