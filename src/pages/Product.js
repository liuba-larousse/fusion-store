/** @format */

import React from 'react';
import './styles/Product.css';
import { Link } from 'react-router-dom';
import data from '../data';

export default function Product({ match }) {
  var product = data.find(
    (item) => item.name == match.params.name
  );
  console.log(match.params);
  var productData;
  if (product)
    productData = (
      <>
        <div className='tag-box'>
          <Link
            className='text-link'
            to={`/collection?category=${product.category}`}
          >
            <span className='type-tag'>
              {product.category}
            </span>
          </Link>
          <Link
            className='text-link'
            to={`/collection?color=${product.color}`}
          >
            <span className='color-tag'>
              {product.color}
            </span>
          </Link>
        </div>
        <div className='product-container'>
          <div className='product-card'>
            <span className='product-card-title'>
              information
            </span>
            <div className='product-info'>
              <div className='product-info-1'>
                <div className='info-box'>
                  <span>sizes</span>
                  <span>
                    US {product.minSize} - US{' '}
                    {product.maxSize}
                  </span>
                </div>
                <div className='info-box'>
                  <span>color</span>
                  <span>{product.color}</span>
                </div>
              </div>
              <div className='info-box'>
                <span className='product-card-title'>
                  description
                </span>
                <span>{product.description}</span>
              </div>
            </div>
            <span className='product-card-title'>care</span>
            <div className='product-care'>
              <div className='info-box'>
                <span>wash care</span>
                <span>{product.wash}</span>
              </div>
              <div className='info-box'>
                <span>product code</span>
                <span>{product.code}</span>
              </div>
            </div>
            <div className='product-price'>
              $ {product.price}
            </div>
          </div>

          <img
            className='product-extra-img'
            src={product.img}
            alt={product.name}
          ></img>
          <img
            className='product-extra-img'
            src={product.img}
            alt={product.name}
          ></img>
        </div>
      </>
    );
  else productData = <div>Product not found</div>;

  return <>{productData}</>;
}
