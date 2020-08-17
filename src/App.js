/** @format */

import React, { useState } from 'react';
import './style/App.css';
import Collection from './pages/Collection';
import Collaborators from './pages/Collaborators';
import About from './pages/About';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { FaBars } from 'react-icons/fa';

export default function App(props) {
  const [isActive, setActive] = useState(false);

  function toggleDropdown() {
    setActive(!isActive);
  }
  return (
    <Router>
      <div className='layout-grid'>
        <div className='title-animation'>
          <span>fashion makes people dream</span>
          <span>fashion makes people dream</span>
          <span>fashion makes people dream</span>
        </div>
        <div className='toggle-icon'>
          <span
            className='nav-icon'
            onClick={toggleDropdown}
          >
            <FaBars />
          </span>
        </div>
        <div className='empty-space'></div>
        <div className='title-verticlal'>
          Vertical title
        </div>
        <div className='navigation'>
          <Navbar isActive={isActive} />
        </div>
        <div className='title-horizontal'>
          <div className='page-title'>collection</div>
        </div>
        <div className='page-rendered'>
          <Switch>
            <Route exact={true} path='/' component={Home} />
            <Route
              path='/collection'
              component={Collection}
            />
            <Route exact path='/about' component={About} />
            <Route
              path='/collaborators'
              component={Collaborators}
            />
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
