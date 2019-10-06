import React from 'react';
import './About.scss';

import Button from '../../components/Button';

export default function About() {

  return (
    <section className="about">
      <div className="container">
        <h1>This project was made by Jedi Emmanuel Kant</h1>
        <div>
          <Button
            link={true}
            path="/"
            label="Back to Home"
          />
        </div>
      </div>
    </section>
  );
}
