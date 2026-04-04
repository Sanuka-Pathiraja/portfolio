import { Helmet } from 'react-helmet-async'
import { PROFILE } from '../../data/info'

const FALLBACK_IMAGE = '/og-preview.svg'

function getSiteUrl() {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin
  }
  return 'https://portfolio.local'
}

export default function SEO({ title, description, path = '/', image = FALLBACK_IMAGE, jsonLd = null }) {
  const siteUrl = getSiteUrl()
  const canonical = `${siteUrl}${path}`
  const fullTitle = title ? `${title} | ${PROFILE.name}` : `${PROFILE.name} | Software Engineer`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${siteUrl}${image}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {jsonLd ? <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> : null}
    </Helmet>
  )
}
