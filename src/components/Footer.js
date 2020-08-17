/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaInstagramSquare,
  FaYoutubeSquare,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='footer-container'>
      <ul className='media-links'>
        <li className='media-link'>
          <span className='media-icon'>
            <FaInstagramSquare />
          </span>
          <span>instagram</span>
        </li>
        <li className='media-link'>
          <span className='media-icon'>
            <FaYoutubeSquare />
          </span>
          <span>youtube</span>
        </li>
      </ul>
      <ul className='footer-links'>
        <li className='footer-link'>
          <Link className='text-link'>contact</Link>
        </li>
        <li className='footer-link'>
          <Link className='text-link'>about</Link>
        </li>
        <li className='footer-link'>
          <Link className='text-link'>privacy</Link>
        </li>
        <li className='footer-link'>
          <Link className='text-link'>terms</Link>
        </li>
      </ul>
      <span className='copyright'>© fusion</span>
    </div>
  );
}
