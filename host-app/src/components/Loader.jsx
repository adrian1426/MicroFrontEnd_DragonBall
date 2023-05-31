import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="text-center">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;