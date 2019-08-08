import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

import { black } from '../utils';

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <nav className="nav">
      <h1 className="logo">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/talks">Talks</Link>
        </li>
        <li className="nav-item">
          <Link to="/writing">Writing</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </HeaderStyles>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

const HeaderStyles = styled.header`
  .logo {
    font-family: 'Lato', Helvetica, Arial, sans-serif;
    font-size: 1.5rem;
  }

  .nav {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    .nav-list {
      display: flex;
      margin: 0;
    }

    .nav-item {
      list-style: none;
    }

    li:not(:last-of-type) {
      margin-right: 1rem;
    }

    a {
      color: ${black};
      opacity: 1;
      text-decoration: none;
      transition: opacity 200ms ease-in-out;

      &:hover {
        opacity: 0.7;
        transition: opacity 200ms ease-in-out;
      }

      &:visited {
        color: inherit;
      }
    }
  }

  @media screen and (min-width: 700px) {
    .logo {
      font-size: 2rem;
    }

    .nav {
      flex-direction: row;
    }

    .nav-list {
      padding-left: 1rem;
    }
  }
`;
