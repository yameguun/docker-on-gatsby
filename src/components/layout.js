import React from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import "./layout.css"

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      { children }
      <Footer />
    </div>
  )
}
