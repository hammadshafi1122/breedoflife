import React from 'react'
import { PiTelevisionBold } from "react-icons/pi";
import Title from '../components/elements/Title';
import { IoCheckmarkDoneCircle } from "react-icons/io5";

function CharitySection() {
  return (
    <div className='p-10 space-y-9 md:flex md:p-20 justify-center md:space-x-20'>
  
    <div className='space-y-9'>
      <Title title="Welcome to Charity" heading="Let Us Come Together
To Make a Difference"/>
        <p>The secret to happiness lies in helping others.
            <br></br> Never
underestimate the difference YOU can make in the
<br></br>
lives of the poor, the abused and the helpless.</p>
<div className='flex space-x-8' >
    <div className=' bg-greenish p-5 w-34 inline-block space-y-2'>
         <div className='flex space-x-2'>
            <IoCheckmarkDoneCircle className='mt-1'/>
            <h1 className='text-primary font-bold'>Our mission</h1>
         </div>
         <p className='inline-block'>
         Lorem ipsum dolor sit amet,
         <br></br>
consetetur sadipscing elitr,
<br></br>
sed diam
         </p>
    </div> 
    <div className='bg-greenish p-5 w-34 inline-block space-y-2'>
    <div className='flex space-x-2 '>
            <PiTelevisionBold className='mt-1'/>
            <h1 className='font-bold text-primary'>Our mission</h1>
         </div>
         <p className='inline-block'>
         Lorem ipsum dolor sit amet,
         <br></br>
consetetur sadipscing elitr,
<br></br>
sed diam
         </p>
    </div>
</div>
<div className='space-y-10'>
    <div className='space-y-2'>
        <div className='flex justify-between font-bold'>
        <h1>Donations</h1>
        <label>75%</label>
        </div>

            <div className='bg-lightGray  h-2'>
                <div className='bg-primary w-2/3 h-2'>

                </div>
            </div>
    </div>
    <div className='space-y-2'>
    <div className='flex justify-between font-bold'>
        <h1>Medical Help</h1>
        <label>90%</label>
        </div>

            <div className='bg-lightGray h-2'>
                <div className='bg-primary  w-3/4 h-2'>

                </div>
            </div>

    </div>
</div>
    </div>
    <div className='bg-lightGray border-4 border-lightGreen p-36'>

</div>

</div>
  )
}

export default CharitySection