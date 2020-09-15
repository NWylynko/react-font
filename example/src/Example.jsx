import React from 'react'
import Font, { Text } from 'react-font'

const Example = () => {
  return (
    <Font family='Viga' onAllLoad={() => console.log('all loaded')}>
      <Font family='Ultra'>
        <h3>Easily apply fonts</h3>
      </Font>
      <Font family='Press Start 2P'>
        <p>Use any font from google fonts with ease</p>
        <p>
          Either wrap a large portion of the app in a Font or just use the font
          where you want
        </p>
      </Font>
      <p>
        No hassle with putting the link in the head tag or importing with css
      </p>
      <Text family='Monoton' style={{ fontSize: 50, margin: 0 }} onLoad={() => console.log('loaded Monoton')}>
        Super simple :)
      </Text>
    </Font>
  )
}

export default Example
