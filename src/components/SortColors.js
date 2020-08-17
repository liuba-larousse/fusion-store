/** @format */

import React from 'react';
import data from '../data';
import Card from './Card';

export default function SortColors({ match }) {
  return (
    <ul className='grid-container'>
      {data
        .filter((item) => item.color === match.params.color)
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
