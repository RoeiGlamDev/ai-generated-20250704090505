// next.config.js
module.exports = {
  // Sentry configuration
  sentry: {
    // Use the @sentry/nextjs plugin
    enabled: true,
    // Your Sentry project's DSN (Data Source Name)
    dsn: process.env.SENTRY_DSN,
    // Your Sentry organization slug
    organization: 'codeforge-ai',
    // Your Sentry project slug
    project: 'javascript-nextjs',
  },
}