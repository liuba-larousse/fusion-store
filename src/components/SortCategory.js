/** @format */

import React from 'react';
import data from '../data';
import Card from './Card';

export default function SortCategory({ match }) {
  return (
    <ul className='grid-container'>
      {data
        .filter(
          (item) => item.category === match.params.category
        )
        .map((item, index) => (
          <Card
            id={index}
            category={item.category}
            color={item.color}
            img={item.img}
            name={item.name}
            price={item.price}
            match={match.path}
          />
        ))}
    </ul>
  );
}
