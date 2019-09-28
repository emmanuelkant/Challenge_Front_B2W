import React from 'react';
import './Loading.scss';

import saberLightBlue from '../../assets/saber-light-blue.png';
import saberLightRed from '../../assets/saber-light-red.png';

export default function Loading() {
  return (
    <section className="loading">
      <div className="battlefield">
        <img className="slb" src={saberLightBlue} alt="saberLightBlue" />
        <img className="slr" src={saberLightRed} alt="saberLightRed" />
      </div>
    </section>
  );
}
