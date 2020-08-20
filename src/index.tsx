import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

interface Props extends FontProps {
  children: JSX.Element | JSX.Element[]
  provider?: string
}

const Font = (props: Props): JSX.Element => {

  const { children } = props

  return (
    <div
      style={styleGen(props)}
    >
      <FontProvider {...props} />
      {children}
    </div>
  )
}

interface TextProps extends FontProps {
  children: string
  provider?: string
}

export const Text = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> & TextProps): JSX.Element => {
  return (
    <p
      {...{ ...props, family: undefined, italic: undefined, weight: undefined }} // pass props but remove font props
      style={{ ...styleGen(props), ...props.style }} // combine the font style and any custom style from props
    >
      <FontProvider {...props} />
      {props.children}
    </p>)
}

interface ProviderProps extends FontProps {
  provider?: string
}

const FontProvider = (props: ProviderProps): JSX.Element | null => {
  const provider = props.provider || 'google'
  if (provider === 'google') {
    return <GoogleFont family={props.family} italic={props.italic} weight={props.weight} />
  }
  return null
}

interface FontProps {
  family: string
  weight?: number
  italic?: boolean
}

const GoogleFont = ({ family, weight, italic }: FontProps): JSX.Element | null => {
  const [url, setUrl] = useState<string>()

  useEffect(() => {
    let encodedURL = 'https://fonts.googleapis.com/css2?'

    encodedURL += `family=${encodeURIComponent(family)}`

    if (weight && italic) {
      encodedURL += `:ital,wght@1,${weight}`
    } else if (weight) {
      encodedURL += `:wght@${weight}`
    } else if (italic) {
      encodedURL += `:ital@1`
    }

    setUrl(encodedURL)
    console.log(encodedURL)
  }, [])

  if (!url) {
    return null
  }

  return (
    <Helmet>
      <link href={url} rel='stylesheet' />
    </Helmet>
  )
}

const styleGen = ({ family, italic, weight }: FontProps) => {
  return {
    fontFamily: `'${family}'`,
    fontStyle: italic ? 'italic' : undefined,
    fontWeight: weight
  }
}

export default Font
