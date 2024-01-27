import React from 'react'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="flex  flex-row justify-between  p-2  w-[100%]">
            <div className='flex flex-row p-2 bg-slate-200'>
                <input className='ml-2 bg-slate-300 flex-1 border border-black' placeholder='search'/>
                <button>
                <SearchIcon/>
                </button>
            </div>
            <div className='w-[150px] flex flex-row justify-evenly'>
           {/* <button>
           <Brightness1/>
           </button> */}
           <button className='group'>
           <AccessibilityNewIcon/>
           <div className='w-fit rounded-md bg-slate-300 text-slate-950 invisible group-hover:visible'><Link to={'https://portfoliobyritesh.netlify.app/'}>portfolio</Link></div>
           </button>
           <button className='group'>
           <GitHubIcon/>
           <div className='w-fit rounded-md bg-slate-300 text-slate-950 invisible group-hover:visible'>GitHub</div>
           </button>
           <button className='group'>
           <LinkedInIcon/>
           <div className='w-fit rounded-md bg-slate-300 text-slate-950 invisible group-hover:visible'>LinkedIn</div>
           </button>
            </div>

    </div>
  )
}

export default Navbar