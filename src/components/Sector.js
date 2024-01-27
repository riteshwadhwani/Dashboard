import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { ManualData } from '../Manualdata'
const Sector = () => {
    const columns = [ {field:"id",headerName:"ID"},
                       {field:"sector", headerName:"Sector",flex:1},
                      {field:"topic",headerName:"Topic",flex:1},
                      {field:"insight",headerName:"Insight",flex :1},
                      {field:"region",headerName:"Region",flex:1}]
    return (
      <div >

   <div className='m-10 h-[70%]'>
   <DataGrid rows={ManualData} columns={columns} />
   </div>
      </div>
    )
  }

export default Sector