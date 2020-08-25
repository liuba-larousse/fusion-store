/** @format */

import React from 'react';
import CollabCard from '../components/CollabCard';
import Infuencer from './Influencer';
import { collabs } from '../data';
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Switch,
} from 'react-router-dom';

export default function Collaborators({ match }) {
  //queries
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const collabList = collabs
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
        <CollabCard
          id={index}
          category={item.category}
          color={item.color}
          img={item.img}
          name={item.name}
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
              <ul className='grid-container'>
                {collabList}
              </ul>
            </>
          )}
        />

        <Route
          path={`${match.url}/:name`}
          render={(props) => <Infuencer {...props} />}
        />
      </Switch>
    </>
  );
}
