import React from 'react';
import { NavLink } from 'react-router-dom';
import ActiveNavLink from './ActiveNavLink';

const Navbar = () => {
  return (
    <nav className="bg-gray-800">

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <NavLink
                className="text-lg text-gray-300"
                to='/'
              >
                Dragon Ball
              </NavLink>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <ActiveNavLink
                  to='/'
                >
                  Home
                </ActiveNavLink>

                <ActiveNavLink
                  to='/personajes'
                >
                  Personajes
                </ActiveNavLink>

                <ActiveNavLink
                  to='/about'
                >
                  About
                </ActiveNavLink>
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;