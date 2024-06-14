import React from 'react'
import Title from '../components/elements/Title'
import Buisness from './Buisness'

function Education({title, heading}) {
  return (
    <div className='md:grid md:grid-cols-2 md:grid-start-1 md:flex-row-reverse  md:gap-60 space-y-40 p-10'>
     
     <div className=''>
        <div className='relative bg-lightGray border-4 border-lightGreen w-48 h-48 md:p-36  '>
        <div className='absolute  mt-20 ml-36  md:mt-10  md:ml-20 bg-lightGray border-4 border-lightGreen w-48 h-48 md:p-32'>

</div>
</div>


        </div>
       <div>
       <Title title={title} heading={heading}/>
<p>The secret to happiness lies in helping others. Never
underestimate the difference YOU can make in the
lives of the poor, the abused and the helpless.</p>
       </div>

        
    </div>
  )
}

export default Education