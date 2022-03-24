import React from 'react';
import './HeroSection.scss';

export default function HeroSection() {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__content--info">
            <p>Hero image stretches the content div </p>
            <h1 className="hero__title">Hero Slogan</h1>
            <button className="hero__button"> Click to Log in! </button>
          </div>
          <div className="hero__content--banner">
            <p> change to img tag or use background img on banner + use banner wrapper </p>
          </div>
        </div>
      </div>
    </div>
  )
}
