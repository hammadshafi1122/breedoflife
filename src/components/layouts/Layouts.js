import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layouts({children}) {
  return (
    <div className='max-w-32'>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
  )
}

export default Layouts