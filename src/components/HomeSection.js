/** @format */

import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function HomeSection(props) {
  //carousel
  let i = 0;
  const [index, setIndex] = useState(i);

  function moveLeft() {
    if (index < 1) {
      setIndex(6);
    } else {
      setIndex(index - 2);
    }
  }
  function moveRight() {
    if (index > 5) {
      setIndex(0);
    } else {
      setIndex(index + 2);
    }
  }
  return (
    <section>
      <div className='carousel-grid'>
        <div className='carousel-title'>
          <Link
            className='text-link'
            to={`/${props.title}`}
          >
            <span>{props.title}</span>
            <FaAngleRight />
          </Link>
          <div className='btns-title carousel-btns'>
            <button
              className='carousel-btn'
              onClick={moveLeft}
            >
              <FaAngleLeft />
            </button>
            <button
              className='carousel-btn'
              onClick={moveRight}
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
        <div className='carousel-sidebar'>
          <div className='btns-sidebar carousel-btns'>
            <button
              className='carousel-btn'
              onClick={moveLeft}
            >
              <FaAngleLeft />
            </button>
            <button
              className='carousel-btn'
              onClick={moveRight}
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
        <div className='carousel-cards'>
          {props.list.slice(index, index + 2)}
        </div>
      </div>
    </section>
  );
}
