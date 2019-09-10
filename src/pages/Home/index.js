import React from 'react';
import './Home.scss';

import { Link } from 'react-router-dom';

import Header from '../../components/Header'

export default function Home() {
  return (
    <section className="home">
      <Header />
      <div className="container">
        <h1>Which's that planet</h1>
        <p>from George Lucas mind</p>
        <button
          type="button"
        >
          <Link to="/planet">Start Game</Link>
        </button>
      </div>
    </section>
  );
}
