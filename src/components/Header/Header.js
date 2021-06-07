import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to='/' exact='true'>
          Home
        </Link>
        <Link to='/add'>Add Todo</Link>
      </nav>
      <div className='title'>Home page</div>
    </header>
  );
};

export default Header;
