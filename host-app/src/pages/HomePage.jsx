import React from 'react';
import Counter from 'Counter/Counter';

const HomePage = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-lg">Counter App</h1>
      <Counter initialCounter={10} />
    </div>
  );
};

export default HomePage;