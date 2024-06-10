import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layouts({children}) {
  return (
    <div>
    <Header isHomepage={true}/>
    <main>{children}</main>
    <Footer />
  </div>
  )
}

export default Layouts