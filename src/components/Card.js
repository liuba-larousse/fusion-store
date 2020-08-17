/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
  return (
    <li className='card'>
      <div className='tag-box'>
        <Link
          className='text-link'
          to={`${props.match}/${props.category}`}
        >
          <span className='type-tag'>{props.category}</span>
        </Link>
        <Link
          className='text-link'
          to={`${props.match}/${props.color}`}
        >
          <span className='color-tag'>{props.color}</span>
        </Link>
      </div>
      <img
        className='card-img'
        src={props.img}
        alt={props.name}
      />
      <div className='card-info'>
        <span className='item-name'>
          {props.name.substring(0, 18) + '...'}
        </span>
        <span> - </span>
        <span className='item-price'>${props.price}</span>
      </div>
    </li>
  );
}
