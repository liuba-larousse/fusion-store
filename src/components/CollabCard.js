/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
  return (
    <li className='card'>
      <div className='tag-box'>
        <Link className='text-link' to='/collaborators'>
          <span className='type-tag'>{props.category}</span>
        </Link>
        <Link
          className='text-link'
          to={`?color=${props.color}`}
        >
          <span className='color-tag'>{props.color}</span>
        </Link>
      </div>
      <Link
        className='text-link'
        to={`${props.match}/${props.name}`}
      >
        <img
          className='card-img'
          src={props.img}
          alt={props.name}
        />
      </Link>

      <div className='card-info'>
        <span className='item-name'>{props.name}</span>
      </div>
    </li>
  );
}
