import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveNavLink = (props) => {
  const { children, to } = props;

  return (
    <NavLink
      className={
        ({ isActive }) =>
          isActive ?
            "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" :
            "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default ActiveNavLink;