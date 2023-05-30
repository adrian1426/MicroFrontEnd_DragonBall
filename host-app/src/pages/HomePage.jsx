import React from 'react';
import Counter from 'Counter/Counter';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-lg">Counter App</h1>
      <ErrorBoundary>
        <Counter initialCounter={20} />
      </ErrorBoundary>
    </div>
  );
};

export default HomePage;