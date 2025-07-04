// sentry.edge.config.js
import { Edge } from '@sentry/edge';

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
  // Use the Edge integration for edge-side error monitoring
  integrations: [new Edge()],
}