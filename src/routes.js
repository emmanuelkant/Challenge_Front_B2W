import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../src/pages/Home';
import Planet from '../src/pages/Planet';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/planet" component={Planet} />
    </BrowserRouter>
  )
}
