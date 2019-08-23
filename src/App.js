/* eslint react/destructuring-assignment: 0 */

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom'
import MovieDetail from './MovieDetail'
import MoviesList from './MoviesList';


const App = () => (
      <Router>
        <div className="App">
          <header className="App-header">
          <Link to="/">
            logo here
          </Link>
          </header>
          <Switch>
            <Route exact path="/" component={MoviesList} />
            <Route path="/:id" component={MovieDetail} />
          </Switch>
        </div>
      </Router>
    )

export default App

 