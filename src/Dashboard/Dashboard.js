import React from 'react'
import Header from '../components/Header' 
import LiveChart from '../components/LiveChart'
import PieChart from '../components/PieChart'
import BarChart from '../components/BarChart'
import { DownloadDoneOutlined, InterestsRounded, MailOutline, Traffic } from '@mui/icons-material'
import RedialBar from '../components/RedialBar'
import ProgressBar from '@ramonak/react-progress-bar'

const Dashboard = () => {
  return (
    <div className=' m-5 bg-transparent  flex flex-col gap-3 justify-between  w-fit h-[650px]  p-8'>
    <div className='flex justify-between items-center w-[1080px]  flex-row '>
    <Header title={"DASHBOARD"} description={"WELCOME TO YOUR DASHBOARD"}/>
    <div>
     <button className='p-4 bg-blue-600 rounded-md hover:bg-blue-400 hover:border hover:border-blue-300'> <DownloadDoneOutlined/>
      Download Reports</button>
    </div>
    </div>
    <div className=' h-[150px] flex flex-row justify-between '>
    <div className=' bg-slate-500 h-[90px] w-[200px] p-3 flex flex-col text-slate-100 justify-center items-center'>
    <ProgressBar className='w-[80px] bg-slate-500' completed={66}/>
    <MailOutline/> Mail
    </div>
     <div className=' bg-slate-500 h-[90px] w-[200px] p-2 flex flex-col text-slate-100 justify-center items-center'>
     <ProgressBar className='w-[90px]'  completed={40}/>
     <Traffic/> Traffic
     </div> 
     <div className=' bg-slate-500 h-[90px] w-[200px] p-3 flex flex-col text-slate-100 justify-center items-center'>
     <ProgressBar className='w-[80px]'  completed={80}/>
     <InterestsRounded/>
    Likelihood</div>
  
    </div>
    <div className='w-[1080px] h-[200px] flex flex-row justify-between'>
         <div className='w-[700px] bg-slate-500 h-[190px]'> 
         <LiveChart/>
         </div>
         <div className=' w-[350px] bg-slate-500 h-[190px]' >
         <RedialBar/>
         </div>
    </div>
    <div className=' w-[1080px] h-[270px] flex flex-row justify-between'>
          <div className='w-[700px] h-[260px] bg-slate-500'>
          <PieChart/>
          </div>
          <div  className='w-[350px] h-[260px] bg-slate-500'>
          <BarChart dashboard={1}/>
          </div>
    </div>
      
    </div>
  )
}

export default Dashboard