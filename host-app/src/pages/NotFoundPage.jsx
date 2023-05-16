import React from 'react';
import { NavLink } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="text-center">
      <h1 className="mt-16 text-5xl text-red-500">
        404 NotFoundPage
      </h1>

      <br />
      <NavLink to='/'>Ir a Home</NavLink>
    </div>
  );
};

export default NotFoundPage;