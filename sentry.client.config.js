// sentry.client.config.js
import { BrowserTracing } from '@sentry/browser';

export default {
  // Your Sentry project's DSN (Data Source Name)
  dsn: process.env.SENTRY_DSN,
  // Your Sentry organization slug
  organization: 'codeforge-ai',
  // Your Sentry project slug
  project: 'javascript-nextjs',
  // Enable tracing for performance monitoring
  tracesSampleRate: 1.0,
  // Enable error boundaries for React components
  enabled: true,
  // Use the BrowserTracing integration for performance monitoring
  integrations: [new BrowserTracing()],
}