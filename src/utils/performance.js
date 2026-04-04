/**
 * Performance monitoring utility
 * Tracks Core Web Vitals and other performance metrics
 */

export const reportWebVitals = (metric) => {
  if (metric.label === 'web-vital') {
    console.log(`${metric.name}: ${metric.value.toFixed(2)}ms`);
    
    // Send to analytics (optional)
    if (window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.value),
        event_category: 'Web Vitals',
      });
    }
  }
};

export const logResourceTiming = () => {
  if (window.performance && window.performance.getEntriesByType) {
    const resources = window.performance.getEntriesByType('resource');
    const navigation = window.performance.getEntriesByType('navigation')[0];
    
    console.group('⚡ Performance Metrics');
    console.log(`DNS Lookup: ${navigation.domainLookupEnd - navigation.domainLookupStart}ms`);
    console.log(`TCP Connection: ${navigation.connectEnd - navigation.connectStart}ms`);
    console.log(`Time to First Byte: ${navigation.responseStart - navigation.requestStart}ms`);
    console.log(`DOM Interactive: ${navigation.domInteractive - navigation.fetchStart}ms`);
    console.log(`DOM Content Loaded: ${navigation.domContentLoadedEventEnd - navigation.fetchStart}ms`);
    console.log(`Page Load Time: ${navigation.loadEventEnd - navigation.fetchStart}ms`);
    
    // Resource loading times
    resources.forEach(resource => {
      if (resource.duration > 100) {
        console.log(`⚠️ ${resource.name.split('/').pop()}: ${resource.duration.toFixed(2)}ms`);
      }
    });
    
    console.groupEnd();
  }
};

// Calculate Largest Contentful Paint (LCP)
export const observeLCP = () => {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log(`📊 LCP: ${lastEntry.renderTime || lastEntry.loadTime}ms`);
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }
};

// First Input Delay (FID)
export const observeFID = () => {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        console.log(`🎯 FID: ${entry.processingDuration}ms`);
      });
    });
    
    observer.observe({ entryTypes: ['first-input'] });
  }
};

export const initPerformanceMonitoring = () => {
  // Log metrics after page load
  if (document.readyState === 'complete') {
    logResourceTiming();
  } else {
    window.addEventListener('load', logResourceTiming);
  }
  
  observeLCP();
  observeFID();
};
