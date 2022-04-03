import React from 'react';
import './HeroSection.scss';
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__content--info">
            <h1 className="hero__title"> Electrify your Future</h1>
            <p className="hero__slogan">Learn more before you spend more!</p>
            <Link className="hero__button" to="/login"> Log in </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
