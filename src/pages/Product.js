/** @format */

import React from 'react';
import './styles/Product.css';
import { Link } from 'react-router-dom';

export default function Product(props) {
  return (
    <>
      <div className='product-bg'>
        <img
          className='product-img'
          src={props.img}
          alt={props.name}
        />
      </div>
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
      <div className='product-container'>
        <div className='product-card'>
          <span>information</span>
          <div className='product-info'>
            <div className='product-info-1'>
              <div className='info-box'>
                <span>sizes</span>
                <span>
                  US {props.minSize} - US {props.maxSize}
                </span>
              </div>
              <div className='info-box'>
                <span>color</span>
                <span>{props.color}</span>
              </div>
            </div>
            <div className='info-box'>
              <span>description</span>
              <span>{props.description}</span>
            </div>
          </div>
          <span>care</span>
          <div className='product-care'>
            <div className='info-box'>
              <span>wash care</span>
              <span>{props.wash}</span>
            </div>
            <div className='info-box'>
              <span>product code</span>
              <span>{props.code}</span>
            </div>
          </div>
          <div className='product-price'>{props.price}</div>
        </div>
        <div className='product-images'>
          <img src={props.img} alt={props.name}></img>
        </div>
      </div>
    </>
  );
}
