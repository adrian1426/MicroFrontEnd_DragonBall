import React from 'react';
import Cards_mf from '../components/Cards_mf';
import ErrorBoundary from '../components/ErrorBoundary';

const PersonajesPage = () => {
  return (
    <div>
      <ErrorBoundary>
        <Cards_mf />
      </ErrorBoundary>
    </div>
  );
};

export default PersonajesPage;