import React from 'react'

const Header = ({title,description}) => {
  return (
    <div className='mb-[10px] text-slate-50 font-light font-serif'>
        <div>{title}</div>
        <div>{description}</div>
    </div>
  )
}

export default Header