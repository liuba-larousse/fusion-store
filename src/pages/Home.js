/** @format */

import React from 'react';
import HomeSection from '../components/HomeSection';
import CardContext from '../components/CardContext';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import data from '../data';

export default function Home() {
  return (
    <>
      <section>
        <div className='carousel-grid'>
          <div className='carousel-title'>
            <Link className='text-link' to='/collection'>
              <span>Explore by Tag</span>
              <FaAngleRight />
            </Link>
          </div>
          <div className='listed-tags'>
            {data.map((item, index) => {
              return (
                <Link
                  className='text-link'
                  to={`Collection?category=${item.category}`}
                >
                  <span className='type-tag'>
                    {item.category}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CardContext.Consumer>
        {(contextList) => (
          <HomeSection
            title='Collection'
            list={contextList.itemList}
          />
        )}
      </CardContext.Consumer>
      <CardContext.Consumer>
        {(contextList) => (
          <HomeSection
            title='Collaborators'
            list={contextList.collabList}
          />
        )}
      </CardContext.Consumer>
    </>
  );
}
