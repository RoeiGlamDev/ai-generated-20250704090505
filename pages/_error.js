// pages/_error.js
import { ErrorBoundary } from '@sentry/react';

const CustomErrorPage = ({ statusCode }) => {
  return (
    <ErrorBoundary
      fallback={({ error, componentStack, resetError }) => (
        <div>
          <h1>Error {statusCode}</h1>
          <p>{error.message}</p>
          <p>{componentStack}</p>
          <button onClick={resetError}>Reset</button>
        </div>
      )}
    >
      <div>
        <h1>Error {statusCode}</h1>
      </div>
    </ErrorBoundary>
  );
};

export default CustomErrorPage;