/** @format */

import React, { useState } from 'react';
import Product from './Product';
import Card from '../components/Card';
import data from '../data';
import {
  BrowserRouter as Router,
  useLocation,
  Route,
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

  //queries
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const itemList = data
    .filter((item) => {
      const hasQueryColor = query.has('color');
      const hasQueryCategory = query.has('category');
      if (hasQueryColor) {
        return item.color === query.get('color');
      }
      if (hasQueryCategory) {
        return item.category === query.get('category');
      }
      return true;
    })
    .map((item, index) => {
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

  return (
    <>
      <Switch>
        <Route
          exact
          path={match.url}
          render={() => (
            <>
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
              <ul className='grid-container'>{itemList}</ul>
            </>
          )}
        />

        <Route
          path={`${match.url}/:name`}
          render={(props) => <Product {...props} />}
        />
      </Switch>
    </>
  );
}
