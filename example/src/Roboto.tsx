import React from 'react'
import Font, {Text} from 'react-font'

const RobotoExample = () => {
  return (
    <>
      <Font family='Roboto'>
        <p>Roboto :)</p>
      </Font>
      <Text family='Roboto' italic>
        Roboto Italic :/
      </Text>
      <Font family='Roboto' weight={700}>
        <p>Roboto Bold :|</p>
      </Font>
      <Text family='Roboto' italic weight={700}>
        Roboto Italic Bold ;)
      </Text>
    </>
  )
}

export default RobotoExample
