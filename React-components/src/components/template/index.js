import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

function Template(props) {
  return (
    <div>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}