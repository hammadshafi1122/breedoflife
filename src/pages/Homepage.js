import React, { useState } from 'react'
import Layouts from '../components/layouts/Layouts'
import AboutSection from '../modules/AboutSection'
import CharitySection from '../modules/CharitySection'
import Causes from '../modules/Causes'


function Homepage() {
  return (
    <Layouts isHomepage={true}>
        <div className=''>
            <AboutSection/>
            <CharitySection/>
            <Causes/>
        </div>
    </Layouts>
  )
}

export default Homepage