/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { collabs } from '../data';

export default function Influencer({ match }) {
  var influencer = collabs.find(
    (item) => item.name == match.params.name
  );
  console.log(match.params);
  var influencerData;
  if (influencer)
    influencerData = (
      <>
        <div className='tag-box'>
          <Link className='text-link' to='/collaborators'>
            <span className='type-tag'>
              {influencer.category}
            </span>
          </Link>
          <Link
            className='text-link'
            to={`/collection?color=${influencer.color}`}
          >
            <span className='color-tag'>
              {influencer.color}
            </span>
          </Link>
        </div>
        <div className='container-influencer'>
          <div className='grid-influencer'>
            <img
              className='img-influencer'
              src={influencer.img}
              alt={influencer.name}
            />
            <div className='text-quotation'>
              {influencer.quotation}
            </div>
            <div className='text-description'>
              {influencer.description}
            </div>
          </div>
          <div className='text-slogan'>
            {influencer.slogan}
          </div>
        </div>
      </>
    );
  else influencerData = <div>Collaborator not found</div>;
  return <>{influencerData}</>;
}
