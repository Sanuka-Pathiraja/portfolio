export function trackEvent(eventName, payload = {}) {
  const data = {
    event: eventName,
    timestamp: new Date().toISOString(),
    path: window.location.pathname,
    ...payload,
  }

  if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(data)
  }

  // Keep a lightweight local trail for quick conversion checks.
  try {
    const key = 'portfolio_analytics_events'
    const existing = JSON.parse(localStorage.getItem(key) || '[]')
    existing.push(data)
    localStorage.setItem(key, JSON.stringify(existing.slice(-100)))
  } catch {
    // Ignore storage restrictions.
  }

  if (import.meta.env.DEV) {
    console.info('[analytics]', data)
  }
}
