import React from 'react'
import DonateCard from '../components/elements/DonateCard'

function Donate() {
  return (
    <div className=' md:grid md:grid-cols-4 md:gap-6 mt-20 space-y-8 md:space-y-0 p-10'>
        <DonateCard/>
        <DonateCard/>
        <DonateCard/>
        <DonateCard/>
    </div>
  )
}

export default Donate