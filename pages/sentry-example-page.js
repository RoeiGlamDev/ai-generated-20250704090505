// pages/sentry-example-page.js
import { useState } from 'react';
import * as Sentry from '@sentry/nextjs';

const SentryExamplePage = () => {
  const [error, setError] = useState(null);

  const handleError = () => {
    try {
      // Simulate an error
      throw new Error('Example error');
    } catch (error) {
      // Capture the error with Sentry
      Sentry.captureException(error);
      setError(error);
    }
  };

  const handlePromiseRejection = () => {
    // Simulate a promise rejection
    Promise.reject(new Error('Example promise rejection')).catch((error) => {
      // Capture the error with Sentry
      Sentry.captureException(error);
      setError(error);
    });
  };

  return (
    <div>
      <h1>Sentry Example Page</h1>
      <button onClick={handleError}>Trigger Error</button>
      <button onClick={handlePromiseRejection}>Trigger Promise Rejection</button>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default SentryExamplePage;