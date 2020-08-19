# react-font

<img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/><img src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>

Simple components to easily use custom fonts for text in react

[![NPM](https://nodei.co/npm/react-font.png)](https://www.npmjs.com/package/react-font)

## Install

```bash
npm i react-font
```

```bash
yarn add react-font
```

## Usage


```tsx
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

```


## License

MIT © [NWylynko](https://github.com/NWylynko)
