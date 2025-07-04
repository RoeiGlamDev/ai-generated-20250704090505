// components/ErrorBoundary.js
import { ErrorBoundary } from '@sentry/react';

const ErrorBoundaryComponent = ({ children }) => {
  return (
    <ErrorBoundary
      fallback={({ error, componentStack, resetError }) => (
        <div>
          <h1>Error</h1>
          <p>{error.message}</p>
          <p>{componentStack}</p>
          <button onClick={resetError}>Reset</button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryComponent;