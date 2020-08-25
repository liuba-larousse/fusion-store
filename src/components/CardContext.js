/** @format */

import React from 'react';
import data, { collabs } from '../data';
import Card from './Card';
import CollabCard from './CollabCard';
import { Link } from 'react-router-dom';

export const lists = {
  itemList: data.map((item, index) => {
    return (
      <Card
        id={index}
        category={item.category}
        color={item.color}
        img={item.img}
        name={item.name}
        price={item.price}
      />
    );
  }),
  collabList: collabs.map((item, index) => {
    return (
      <CollabCard
        id={index}
        category={item.category}
        color={item.color}
        img={item.img}
        name={item.name}
      />
    );
  }),
  tagList: data.map((item, index) => {
    return (
      <Link
        className='text-link'
        to={`?category=${item.category}`}
      >
        <span className='type-tag'>{item.category}</span>
      </Link>
    );
  }),
};

const CardContext = React.createContext(lists);
export default CardContext;
