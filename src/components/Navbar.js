/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className='navbar'>
      <div className='nav-links'>
        <ul
          className={
            props.isActive
              ? 'nav-dropdown '
              : 'nav-dropdown collapsed'
          }
        >
          <li className='nav-link'>
            <Link className='text-link' to='/'>
              home
            </Link>
          </li>
          <li className='nav-link'>
            <Link className='text-link' to='/collection'>
              collection
            </Link>
          </li>
          <li className='nav-link'>
            <Link className='text-link' to='/collaborators'>
              collaborators
            </Link>
          </li>
          <li className='nav-link'>
            <Link className='text-link' to='/about'>
              about
            </Link>
          </li>
        </ul>
      </div>
      <Link className='text-link' to='/'>
        <span className='nav-logo'>fusion</span>
      </Link>
    </nav>
  );
}
