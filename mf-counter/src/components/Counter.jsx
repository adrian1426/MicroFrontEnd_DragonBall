import React, { useState } from 'react';

const Counter = (props) => {
  const { initialCounter } = props;
  const [counter, setCounter] = useState(initialCounter);

  const handleAddCounter = (value) => {
    setCounter(c => c + value);
  };

  const handleMinusCounter = (value) => {
    setCounter(c => c - value);
  };

  return (
    <div className="text-4xl">
      <button
        className='bg-green-300 text-center font-bold rounded-md p-2'
        onClick={() => handleAddCounter(1)}
      >
        +1
      </button>

      <span className="mx-10">{counter}</span>

      <button
        className='bg-yellow-600 text-center font-bold rounded-md p-2'
        onClick={() => handleMinusCounter(1)}
      >
        -1
      </button>
    </div>
  );
};

export default Counter;