import React from 'react';
import './PageIntro.scss';
import { Link } from "react-router-dom";

function PageIntro() {
  return (
    <div className="pageContent">
        <div className="pageContent__intro">
            <h2 className="pageContent__title"> 2022 Electric Vehicles </h2>
            <p className="pageContent__text"> Click to learn more about each vehicle. </p>
            <p className="pageContent__text"> For more information about electric vehicles, see the  
                <Link to="/about" className="pageContent__text--link">
                   about page!
                </Link>
            </p>
        </div>
    </div>
  )
}

export default PageIntro