import React from 'react';
import { Link } from 'react-router-dom';

export default function Jobs(props) {
  return (
    <div>
      {props.namethis.map(name => (
        <div>{name}</div>
      ))}
    </div>
  )
}