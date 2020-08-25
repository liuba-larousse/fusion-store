/** @format */

import React from 'react';
import './style/App.css';
import Collection from './pages/Collection';
import Collaborators from './pages/Collaborators';
import About from './pages/About';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App({ match }) {
  return (
    <Router>
      <div className='layout-grid'>
        <Header />
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
