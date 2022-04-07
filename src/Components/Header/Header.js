import React from 'react';
import Logo from '../../assets/logos/logo-img.jpg';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (
      <section className="header">
        <div className="header__content">
          <Link className="header__logo" to="/">
            <img src={Logo} alt="site logo" className="header__logoImg" />
            Electrify
          </Link>

          <nav className="nav">
            <div className="nav__list">
              <NavLink 
                to="/"
                className="nav__link nav__link--home"
                activeClassName="nav__link--highlight"
              >
                Home 
              </NavLink>
              <NavLink 
                to="/about"
                className="nav__link"
                activeClassName="nav__link--highlight"
              >
                About 
              </NavLink>
              <NavLink 
                to="/login"
                className="nav__link"
                activeClassName="nav__link--highlight"
              >
                Login 
              </NavLink>
            </div>
          </nav>
          
        </div>
      </section>
    );
  };
  
  export default Header;