import React from 'react'
import Font from 'react-font'

const Example = () => {
  return (
    <>
      <Font family='Viga'>
        <Font family='Ultra'>
          <h3>Easily apply fonts</h3>
        </Font>
        <Font family='Press Start 2P'>
          <p>Use any font from google fonts with ease</p>
          <p>Either wrap a large portion of the app in a Font or just use the font where you want</p>
        </Font>
        <p>No hassle with putting the link in the head tag or importing with css</p>
        <Font family='Monoton'>
          <p style={{ fontSize: 48, margin: 0 }}>Super simple :)</p>
        </Font>
      </Font>
    </>
  )
}

export default Example
