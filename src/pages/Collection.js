/** @format */

import React, { useState } from 'react';
import Card from '../components/Card';
import data from '../data';
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

export default function Collection({ match }) {
  // toggle SortButtons

  const [isActive, setActive] = useState(false);

  function toggleDropdown() {
    setActive(!isActive);
  }

  // sort Items

  const [notSorted, setSorted] = useState(data);

  function sortHigh() {
    let sortedData = data.sort((a, b) => b.price - a.price);
    setSorted({
      data: sortedData,
    });
  }
  function sortLow() {
    let sortedData = data.sort((a, b) => a.price - b.price);
    setSorted({
      data: sortedData,
    });
  }

  const itemList = data.map((item, index) => {
    return (
      <Card
        id={index}
        category={item.category}
        color={item.color}
        img={item.img}
        name={item.name}
        price={item.price}
        match={match.url}
      />
    );
  });
  console.log(itemList[0].props.color);
  return (
    <Router>
      <div className='sort-container'>
        <span
          className='sort-toggle'
          onClick={toggleDropdown}
        >
          sort
        </span>
        <ul
          className={
            isActive
              ? 'sort-dropdown'
              : 'sort-dropdown collapsed'
          }
        >
          <li
            className='sort-btn sort-lowest'
            onClick={sortLow}
          >
            lowest priced
          </li>
          <li
            className='sort-btn sort-highest'
            onClick={sortHigh}
          >
            highest priced
          </li>
        </ul>
      </div>

      <Switch>
        <Route
          path={match.url}
          render={() => (
            <ul className='grid-container'>{itemList}</ul>
          )}
        />
        <Route
          path={`${match.path}/:name`}
          render={({ match }) => (
            <ul className='grid-container'>
              {itemList.filter(
                (item) =>
                  item.props.color === match.params.name
              )}
            </ul>
          )}
        />
        <Route
          path={`${match.path}/:name`}
          render={({ match }) => (
            <ul className='grid-container'>
              {itemList.filter(
                (item) =>
                  item.props.category === match.params.name
              )}
            </ul>
          )}
        />
      </Switch>
    </Router>
  );
}
