import React from 'react'

const HeadingInfo = ({title,subtitle}) => {
  return (
    <div className='space-y-3'>
      <h3 className='text-3xl md:text-5xl font-bold text-center'>{title}</h3>
      <p className='w-11/12 md:w-2/3 mx-auto text-center text-base font-medium'>{subtitle}</p>
    </div>
  )
}

export default HeadingInfo
