import React from 'react';
import '../Box/styles.css'

function Box(props) {
  return (
    <section className="box">
      {props.children}
    </section>

  )
}

export default Box;