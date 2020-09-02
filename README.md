# react-font

<img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/><img src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>

Simple components to easily use custom fonts for text in react

[![NPM](https://nodei.co/npm/react-font.png)](https://www.npmjs.com/package/react-font)

Currently only supports [google fonts](https://fonts.google.com/).

## Install

```bash
npm i react-font
```

```bash
yarn add react-font
```

## Usage

Apply any font easily

<!-- add-file: ./example/src/Example.jsx -->
``` jsx markdown-add-files
import React from 'react'
import Font, {Text} from 'react-font'

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
        <Text family='Monoton' style={{ fontSize: 48, margin: 0 }}>
          Super simple :)
        </Text>
      </Font>
    </>
  )
}

export default Example

```

<!-- markdown-code-runner
  {
    "dependencies": [
      "react-font"
    ]
  }
-->

Supports italics and font weight

<!-- add-file: ./example/src/Roboto.jsx -->
``` jsx markdown-add-files
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

```

<!-- markdown-code-runner
  {
    "dependencies": [
      "react-font"
    ]
  }
-->

## License

MIT © [NWylynko](https://github.com/NWylynko)
