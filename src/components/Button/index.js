import React from 'react';
import './Button.scss';

import { Link } from 'react-router-dom';

export default function Button(props) {
  return (
    <button
      type="button"
      className="button"
    >
      <Link to={props.path}>{props.label}</Link>
    </button>
  );
}
