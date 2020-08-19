import React from 'react'
import ReactDOM from 'react-dom'
import Font from './index'

it(`renders Roboto without crashing`, () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Font family='Roboto'>
      <p>Roboto</p>
    </Font>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it(`renders Roboto italic without crashing`, () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Font family='Roboto' italic>
      <p>Roboto</p>
    </Font>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it(`renders Roboto bold without crashing`, () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Font family='Roboto' weight={700}>
      <p>Roboto</p>
    </Font>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it(`renders Roboto italic bold without crashing`, () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Font family='Roboto' italic weight={700}>
      <p>Roboto</p>
    </Font>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
