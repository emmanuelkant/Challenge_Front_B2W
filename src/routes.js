import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../src/pages/Home';
import Game from '../src/pages/Game';
import About from '../src/pages/About';

export default function Routes({ location }) {
  return (
    <Router>
      <Switch location={location}>
        <Route path="/" exact component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  )
}
