import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

interface Props {
  family: string
  weight?: number
  italic?: boolean
  children: JSX.Element
}

const Font = ({ family, weight, italic, children }: Props): JSX.Element => {
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
  }, [])

  return (
    <div
      style={{
        fontFamily: family,
        fontStyle: italic ? 'italic' : undefined,
        fontWeight: weight
      }}
    >
      {url && (
        <Helmet>
          <link href={url} rel='stylesheet' />
        </Helmet>
      )}
      {children}
    </div>
  )
}

export default Font
