import React from 'react';
import './Home.scss';

import Button from '../../components/Button';

export default function Home() {
  return (
    <section className="home">
      <div className="container">
        <h1>What is that planet?</h1>
        <p>from George Lucas' mind</p>
        <div>
          <Button 
            path="/game"
            label="Start Game"
          />
          <Button 
            path="/about"
            label="About"
          />
        </div>
      </div>
    </section>
  );
}
