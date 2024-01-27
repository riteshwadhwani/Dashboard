import { DataGrid } from '@mui/x-data-grid'
import { ManualData } from '../Manualdata'
import React from 'react'
import Header from '../components/Header'


const Sector = () => {
    const columns = [ {field:"id",headerName:"ID"},
                       {field:"sector", headerName:"Sector",flex:1},
                      {field:"topic",headerName:"Topic",flex:1},
                      {field:"insight",headerName:"Insight",flex :1},
                      {field:"region",headerName:"Region",flex:1}]
    return (
      <div className='m-5 w-[1200px] h-[700px]'>
      <Header title={"Sector"} description={"Managing sector"}/>
   <div className='m-10 h-[70%]'>
   <DataGrid rows={ManualData} columns={columns} />
   </div>
      </div>
    )
  }

export default Sector