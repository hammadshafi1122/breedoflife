import React from 'react'
import { Buttons } from '../components/elements'
import Title from '../components/elements/Title'
function AboutSection() {
  return (
    <div className='p-10 space-y-9 md:flex md:p-20 justify-center  md:space-x-64'>
        <div className='bg-lightGray border-4 border-lightGreen p-36'>

        </div>
        <div className='space-y-9'>
          <Title title="About Us" heading="Your Support is Really
Powerful.​"/>
            <p>The secret to happiness lies in helping others.
                <br></br> Never
underestimate the difference YOU can make in the
<br></br>
lives of the poor, the abused and the helpless.</p>
<Buttons type="primary" title="Read More"/>
        </div>
       

    </div>
  )
}

export default AboutSection