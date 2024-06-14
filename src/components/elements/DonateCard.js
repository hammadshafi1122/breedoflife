import React from 'react'
import { FaHandsHelping } from "react-icons/fa";


function DonateCard() {
  return (
    <div className='bg-greenish md:p-10 space-y-10 md:ml-10   '>
   <div class="w-20 h-20 relative ml-32 md:ml-3 ">
   <div class="absolute inset-0 rounded-full border-8 border-gradient-stop"></div>
   <div className='absolute mt-4 ml-6 flex items-center'><FaHandsHelping size={40}/></div>
  <div class="absolute inset-0 rounded-full border-8 border-primary border-s-gray-200  border-gradient-complete"></div>
  
</div>
          <h1 className='ml-32 md:ml-3 font-bold text-3xl  '>4597+</h1>
          <label className='ml-32 md:ml-2'>People rised</label>
    </div>
  )
}

export default DonateCard