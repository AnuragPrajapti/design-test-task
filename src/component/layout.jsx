import React from 'react'
import Footer from './footer/footer'
import HeaderNavbar from './header/navbar'

const Layout = (props) => {
  return (
    <div>
        <HeaderNavbar />
         {props.children}
        <Footer />
    </div>
  )
}

export default Layout