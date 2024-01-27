import React, { useState } from 'react'
import {Menu, MenuItem } from 'react-pro-sidebar'
import { Link, useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HelpIcon from '@mui/icons-material/Help';
import TopicIcon from '@mui/icons-material/Topic';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import myimage from '../assets/myimage.jpg'

const Item = ({title,to,icon,selected,setSelected}) =>{
  const navigate = useNavigate();
  return (
    <MenuItem
    active={selected===title}
    onClick={()=>{setSelected(title);navigate(to)}}
    icon={icon}>
      <div>
        {title}
        <Link to={to}/>
      </div>
    </MenuItem>
  )
}
const Sidebar = () => {
  const [selected,setSelected]= useState("Dashboard");
  const [collapsed,setCollapsed] = useState(false);
  return (
    <div className='h-[750px]'>
    {
      collapsed ? (<div className=' h-[750px] bg-slate-500'><button className='mt-4 ' onClick={()=>{setCollapsed(!collapsed)}}><MenuIcon/></button></div>):
      (
        <div className=' mb-6 h-[750px] w-20% bg-slate-500 '>
                <div className='flex flex-crow p-2 justify-between '> 
                <p>hey!!</p>
                <div className='w-10%'><button onClick={()=>{setCollapsed(!collapsed)}}><MenuIcon/></button></div>
                </div>
                <div className="flex flex-col justify-center items-center ">
                  <img className='w-[100px]  h-[100px] cursor-pointer rounded-2xl' alt='profile' src={myimage} />
                  <Typography className='font-bold ml-3'>
              Ritesh
            </Typography>
                </div>
                <div>
            
            <Menu>
              <Item
                title="Home"
                to="/"
                icon={<HomeIcon/>}
                selected={selected}
                setSelected={setSelected}
              />
             
              <Item
                title="Sector"
                to="/sector"
                icon={<TopicIcon/>}
                selected={selected}
                setSelected={setSelected}
              />
              <p className=' italic'>Charts</p>
              <Item
                title="LiveChart"
                to="/livechart"
                icon={<PublicIcon/>}
                selected={selected}
                setSelected={setSelected}
              />
               <Item
                title="Radial Chart"
                to="/location"
                icon={<LocationCityIcon/>}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Pie Chart"
                to="/piechart"
                icon={<PieChartIcon/>}
                selected={selected}
                setSelected={setSelected}
              />
               <Item
                title="Bar Chart"
                to="/bar"
                icon={<BarChartIcon/>}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Contact Information"
                to="/contact"
                icon={<ContactMailIcon/>}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="help"
                to="/help"
                icon={<HelpIcon/>}
                selected={selected}
                setSelected={setSelected}
              />
            </Menu>
    </div>
    </div>

      )
    }
    </div>
   
  )
}

export default Sidebar