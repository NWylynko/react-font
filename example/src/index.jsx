import React from 'react'
import ReactDOM from 'react-dom'
import Roboto from './Roboto'
import Example from './Example';

const App = () => {
  return (
    <>
      <p>General Example</p>
      <div style={{ border: '2px solid black', borderRadius: 5, width: 'fit-content', padding: 10 }}>
        <Example />
      </div>
      <p>Roboto</p>
      <div style={{ border: '2px solid black', borderRadius: 5, width: 'fit-content', padding: 10 }}>
        <Roboto />
      </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
