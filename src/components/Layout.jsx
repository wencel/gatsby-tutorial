import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

import "normalize.css"
import "../assets/css/main.css"
import Seo from "./SEO"

const Layout = ({ children, ...props }) => {
  return (
    <>
      <Seo {...props} />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
