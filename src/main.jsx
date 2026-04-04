import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import { initPerformanceMonitoring } from './utils/performance.js'

class RootErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, errorMessage: '' }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorMessage: error?.message || 'Unknown runtime error',
    }
  }

  componentDidCatch(error, info) {
    console.error('Root render failure:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', background: '#090909', color: '#fff', display: 'grid', placeItems: 'center', padding: '24px' }}>
          <div style={{ maxWidth: '680px', border: '1px solid rgba(255,255,255,0.14)', borderRadius: '16px', padding: '18px', background: 'rgba(255,255,255,0.04)' }}>
            <h1 style={{ margin: 0, marginBottom: '10px', fontSize: '20px' }}>Runtime Error</h1>
            <p style={{ margin: 0, opacity: 0.88, lineHeight: 1.6 }}>
              {this.state.errorMessage}
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Initialize performance monitoring
if (import.meta.env.DEV) {
  try {
    initPerformanceMonitoring();
  } catch (err) {
    console.warn('Performance monitoring init skipped:', err);
  }
}

// Keep service workers out of local development to avoid stale-cache blank screens.
if ('serviceWorker' in navigator) {
  if (import.meta.env.DEV) {
    window.addEventListener('load', async () => {
      const regs = await navigator.serviceWorker.getRegistrations()
      await Promise.all(regs.map((reg) => reg.unregister()))

      if ('caches' in window) {
        const keys = await caches.keys()
        await Promise.all(
          keys
            .filter((key) => key.startsWith('portfolio-'))
            .map((key) => caches.delete(key))
        )
      }
    })
  } else if (import.meta.env.PROD) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch((err) => {
        console.log('Service Worker registration failed:', err)
      })
    })
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <RootErrorBoundary>
          <App />
        </RootErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)

const bootStatus = document.getElementById('boot-status')
if (bootStatus) {
  bootStatus.textContent = 'App mounted.'
  setTimeout(() => {
    bootStatus.remove()
  }, 600)
}
