import React from 'react'

function Title({title,heading}) {
  return (
    <div className='space-y-9'>
           <div className='flex space-x-2'>
           <h1 className='font-bold'>{title}</h1>
           <div className='bg-secondary   w-20 h-0.5 mt-3'></div>
           </div>
            <h1 className='text-black font-bold text-3xl'>{heading}.​</h1>
          
        </div>
  )
}

export default Title