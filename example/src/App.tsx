import React from 'react'

import Font from 'react-font'

const App = () => {
  return (
    <>
      <Font family='Roboto'>
        <p>Roboto :)</p>
      </Font>
      <Font family='Roboto' italic>
        <p>Roboto Italic :/</p>
      </Font>
      <Font family='Roboto' weight={700}>
        <p>Roboto Bold :|</p>
      </Font>
      <Font family='Roboto' italic weight={700}>
        <p>Roboto Italic Bold ;)</p>
      </Font>
    </>
  )
}

export default App
