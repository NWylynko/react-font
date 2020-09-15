# react-font

<img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/><img src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>

Simple components to easily use custom fonts for text in react

[![NPM](https://nodei.co/npm/react-font.png)](https://www.npmjs.com/package/react-font)

Currently only supports [google fonts](https://fonts.google.com/) for now.

## Install

```
npm i react-font
```

```
yarn add react-font
```

## Components

`<Font />` Apply font to child components

`<Text />` uses `<p />` instead of div

## Props

`family="Kufam"`
The name of the font you want to use.

`weight={700}`
The weight of the font, 400 is normal, 700 is bold, not all fonts support all weights, check google fonts.

`italic={true}`
If the font should be italic, not all fonts support it but css will still make any font slant to fake it.


`onLoad: (family: string, style: string) => void`
Called when that font is loaded, parsed and display, useful to hide the text until it loads.

`onError: (family: string, style: string) => void`
Called if the font fails to load, either a font family name was put in that doesnt exist or google fonts failed to response with the font.

`onAllLoad: () => void`
Like onLoad but once all the fonts have loaded. Doesn't work on the `<Text />` Component for some reason.

`onAllError: () => void`
Like onError but if all the fonts dont load, eg if the user doesn't have internet and the font isnt cached.

## Usage

Apply any font easily

<!-- add-file: ./example/src/Example.jsx -->

``` jsx markdown-add-files
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

```
<!-- markdown-code-runner
  {
    "dependencies": [
      "react-font"
    ]
  }
-->

<!-- markdown-code-runner image-start -->

![rendered jsx](./README.0.png)

<!-- markdown-code-runner image-end -->

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

<!-- markdown-code-runner image-start -->

![rendered jsx](./README.1.png)

<!-- markdown-code-runner image-end -->

## License

MIT © [NWylynko](https://github.com/NWylynko)
