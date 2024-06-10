import React from 'react'
import Navbar from './Navbar'
import HeaderSection from './HeaderSection'
function Header() {
  return (
   <div className=''>
     <div className='md:w-full flex '>

      
<div className=' mr-[-200px] h-0 md:w-full  border-primary  border-l-[110px]  border-r-[100px] border-t-[600px]  md:border-t-[500px]   border-r-transparent'></div>
<div className='absolute w-full p-2 md:p-4'>
<Navbar/>
<div className='md:flex justify-center'>
<HeaderSection />
</div>
<div>

</div>
</div>
<div className='  h-0  md:w-full  border-secondary border-b-[600px] md:border-b-[500px]  border-l-[200px]  border-r-[200px] md:border-r-[400px] border-l-transparent'></div>

</div>

   </div>
  )
}

export default Header