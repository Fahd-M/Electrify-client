import React from 'react'
import './Footer.scss'
import facebook from "../../assets/icons/icon-facebook.png";
import instagram from "../../assets/icons/icon-instagram.png";
import twitter from "../../assets/icons/icon-twitter.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__main">
          <div className="footer__social">
            <h3 className="footer__title">Follow </h3>

            <div className="footer__social-wrapper">
              <div>
                <a href="https://www.instagram.com">
                  <img
                    className="footer__image"
                    src={instagram}
                    alt="instagram"
                  />
                </a>
              </div>

              <div>
                <a href="https://www.facebook.com">
                  <img
                    className="footer__image"
                    src={facebook}
                    alt="facebook"
                  />
                </a>
              </div>

              <div>
                <a href="https://www.twitter.com">
                  <img className="footer__image" src={twitter} alt="twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__legal">
          <p className="footer__content">
            ©Electrify2022. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
