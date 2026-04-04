import { lazy, Suspense, useState } from 'react'

/**
 * Image optimization helper
 * Lazy loads images to improve initial page load
 */

export const LazyImage = ({ src, alt, className, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      {...props}
    />
  )
}

/**
 * Responsive image component with srcset support
 * Useful for delivering different image sizes to different devices
 */
export const ResponsiveImage = ({ 
  src, 
  srcSet, 
  sizes, 
  alt, 
  className, 
  ...props 
}) => {
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      loading="lazy"
      {...props}
    />
  )
}

/**
 * WebP image with fallback
 * Delivers modern format where supported, falls back to original
 */
export const WebPImage = ({ 
  webp, 
  src, 
  alt, 
  className, 
  ...props 
}) => {
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img 
        src={src} 
        alt={alt} 
        className={className}
        loading="lazy"
        {...props} 
      />
    </picture>
  )
}

/**
 * Image with blur-up effect
 * Shows a blurred placeholder while full image loads
 */
export const BlurImage = ({ 
  src, 
  blurSrc, 
  alt, 
  className, 
  ...props 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="relative overflow-hidden">
      {/* Blur placeholder */}
      <img
        src={blurSrc}
        alt={alt}
        className={`${className} blur-lg ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        aria-hidden="true"
      />
      
      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        className={`${className} absolute inset-0 ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={() => setImageLoaded(true)}
        loading="lazy"
        {...props}
      />
    </div>
  )
}
