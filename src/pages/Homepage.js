import React, { useState } from 'react'
import Layouts from '../components/layouts/Layouts'
import AboutSection from '../modules/AboutSection'
import CharitySection from '../modules/CharitySection'
import Donate from '../modules/Donate'
import Causes from '../modules/Causes'
// import ContactUs from '../modules/ContactUs'
import Education from '../modules/Education'

function Homepage() {
  return (
    <Layouts >
        <div className='w-screen bg-blue-200 flex justify-center'>
        <div className='md:p-40  '>
            <AboutSection/>
            <CharitySection/>
            <Causes/>
            <Education title="Education" heading="Your Support is Really
Powerful.​"/>
            <Education title="Buisness" heading="Your Support is Really
Powerful.​"/>
            
            <Donate/>
            {/* <ContactUs/> */}
        </div>
        </div>
    </Layouts>
  )
}

export default Homepage