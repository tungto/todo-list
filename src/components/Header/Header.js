import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <NavContainer className='navbar'>
      <ul className='nav-links'>
        <li className='link'>
          <Link to='/' exact='true'>
            Home
          </Link>
        </li>
        <li className='link'>
          <Link to='/add'>Add Todo</Link>
        </li>
      </ul>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  padding: 2rem;

  .nav-links {
    display: flex;
    justify-content: center;
  }
  .link {
    margin: 1rem;
    a {
      padding: 0.5rem;
      font-weight: 500;
      :hover {
        border-bottom: 1px solid var(--clr-black);
      }
    }
  }
`;
export default Header;
