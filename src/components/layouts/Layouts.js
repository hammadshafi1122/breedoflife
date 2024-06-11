import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layouts({children}) {
  return (
    <div className=' '>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
  )
}

export default Layouts