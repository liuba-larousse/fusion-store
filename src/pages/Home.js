/** @format */

import React from 'react';
import Product from './Product';

export default function Home() {
  return (
    <Product
      img='https://collusion.imgix.net/f12acd8563c24682a29a57b36f5ebcdd.jpg?w=540&h=960&q=50&auto=format'
      category='bottoms'
      color='beige'
      price='20'
      minSize='4'
      mixSize='18'
      description='Ut enim ad minim veniam, quis nostrud.'
      wash='machine wash'
      code='1'
    />
  );
}
