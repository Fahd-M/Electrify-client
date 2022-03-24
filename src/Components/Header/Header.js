import React from 'react';

import './Header.scss';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (
      <section className="header">
        <div className="header__banner"></div>
        <div className="header__bottom">
          <Link className="header__logo" to="/">Electrify</Link>
          <nav className="header__nav">
            <NavLink
              className="header__nav-link"
              activeClassName="header__nav-link--active"
              to="/"
              exact
            >
              Home
            </NavLink>
            <NavLink
              className="header__nav-link"
              activeClassName="header__nav-link--active"
              to="/about"
              exact
            >
              About
            </NavLink>
            <NavLink
              className="header__nav-link"
              activeClassName="header__nav-link--active"
              to="/Login"
              exact
            >
              Login
            </NavLink>
          </nav>
        </div>
      </section>
    );
  };
  
  export default Header;