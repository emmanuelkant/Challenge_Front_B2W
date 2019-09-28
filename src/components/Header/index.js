import React from 'react';
import './Header.scss';
import SWLogo from '../../assets/SWLogo.png';

export default function Header() {
  return (
    <section className="header"> 
      <img src={SWLogo} className="logo" alt="SWLogo"/>
      <ul>
        <li>About</li>
      </ul>
    </section>
  );
}
