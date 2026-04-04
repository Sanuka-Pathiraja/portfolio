import { useState } from 'react'

export default function SafeImage({ src, alt, fallbackSrc = '/favicon.svg', className = '', ...props }) {
  const [currentSrc, setCurrentSrc] = useState(src)

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc)
        }
      }}
      {...props}
    />
  )
}
