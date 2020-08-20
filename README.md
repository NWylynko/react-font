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

Apply any font easily

```tsx
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

```

Supports italics and font weight

```tsx
import React from 'react'
import Font from 'react-font'

const RobotoExample = () => {
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

export default RobotoExample

```


## License

MIT © [NWylynko](https://github.com/NWylynko)
