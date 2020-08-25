/** @format */

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { FaBars } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const [isActive, setActive] = useState(false);
  function toggleDropdown() {
    setActive(!isActive);
  }

  // setting vertical title
  const [title, setTitle] = useState('home');
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      setTitle('fusion');
    } else if (location.pathname.includes('/collection/')) {
      setTitle(location.pathname.substring(12, 40));
    } else if (
      location.pathname.includes('/collaborators/')
    ) {
      setTitle(location.pathname.substring(15, 40));
    } else {
      setTitle(location.pathname.substring(1, 20));
    }
  });

  return (
    <>
      <div className='title-animation'>
        <span>fashion makes people dream</span>
        <span>fashion makes people dream</span>
        <span>fashion makes people dream</span>
      </div>
      <div className='toggle-icon'>
        <span className='nav-icon' onClick={toggleDropdown}>
          <FaBars />
        </span>
      </div>
      <div className='title-verticlal'>{title}</div>
      <div className='navigation'>
        <Navbar isActive={isActive} />
      </div>
      <div className='title-horizontal'>
        <div className='page-title'>{title}</div>
      </div>
    </>
  );
}
