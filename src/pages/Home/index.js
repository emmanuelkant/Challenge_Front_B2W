import React from 'react';
import './Home.scss';

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="home">
      <div className="container">
        <h1>Which's that planet?</h1>
        <p>from George Lucas mind</p>
        <div>
          <button
            type="button"
          >
            <Link to="/planet">Start Game</Link>
          </button>
          <button
            type="button"
          >
            <Link to="/planet">About</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
