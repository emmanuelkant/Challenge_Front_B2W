import React from 'react';
import './Button.scss';

import { Link } from 'react-router-dom';

export default function Button(props) {
  console.log('Test github vscode');
  return props.link ? (
    <Link to={props.path}>
      <button
        type="button"
        className="button"
      >
        {props.label}
      </button>
    </Link>
  ) : (
    <button
      type="button"
      className="button"
      onClick={props.click}
    >
      {props.label}
    </button>
  )
}
