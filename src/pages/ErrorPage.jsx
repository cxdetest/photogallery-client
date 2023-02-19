import React from 'react';
import { Link } from 'react-router-dom';
import { BiError } from 'react-icons/bi';

const ErrorPage = () => {
  return (
    <Link to='/'>
      <span style={style}>
        <h2>ErrorPage</h2>
        <BiError />
        Go to Home
      </span>
    </Link>
  );
};

export default ErrorPage;

const style = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 21,
  color: 'black',
};
