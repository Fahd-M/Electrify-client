import React from 'react';
import './AboutPage.scss';
export default function AboutPage() {
  return (
    <div className="about">
      <div className="about-wrapper">
        <div className="about__electric">
          <div className='electric__intro'>
            <h1 className="about__title"> Electric Vehicles? </h1>
            <h3 className='electric__heading'> Where to start</h3>
            <p className='explainer'> There are 4 options primarily available to pick from when it comes to electric vehicles. There are numerous benefits in all of them. </p>
            <h3 className='electric__heading'> Benefits: Less is more </h3>
              <ul className='benefitsList'>
                <li className='benefitsList__item'>Fuel and Maintenance: Charging electric vehicles costs less. Electric motors are more durable. Brakes last longer. Fewer part replacements. Less maintenance(oil changes, transmission, exhaust systems). </li>
                <li className='benefitsList__item'>Environmental: Reduce your greenhouse gas emissions by 60-90% by driving battery electric vehicles or plug-in hybrid electric vehicles and using the Ontario low-carbon electricity to power their vehicles.</li>
                <li className='benefitsList__item'>Government Support: Ontario Green License plate program, tax incentives, reserved parking to charge</li>
              </ul>
          </div>          
          <div className="electric__types">
            <h3 className='electric__heading'> Types</h3>
            <p className='explainer'> <span className='electric__types--label'>Hybrid Electric Vehicles (HEV):</span>  HEVs seamlessly combine the power of a gas engine with electric motors. And because the hybrid battery recharges on the go, you never need to plug in. </p>
            <p className='explainer'> <span className='electric__types--label'>Plug-in Electric Vehicles(PHEV):</span> PHEVs operate in the same way as HEVs, but can optionally be plugged in for extended electric-only range.</p>
            <p className='explainer'> <span className='electric__types--label'>Battery Electric Vehicles(BEV):</span> BEVs are zero-emission vehicles that are powered by electricity alone. BEVs require plugging-in, and some can also utilizing regenerative braking to recharge the onboard battery as you drive. </p>
            <p className='explainer'> <span className='electric__types--label'>Hydrogen Fuel Cell Electric Vehicles(FCEV):</span> FCEVs use hydrogen as an energy source to power high-output electric motors, emitting water as the only by-product from the tailpipe. </p>
          </div>

        </div>
        <div className="about__creator">
          <div className='intro-future'>
            <h3 className='electric__heading'> About creator</h3>
            <p className='explainer'> This site was created by Fahd, a junior full-stack web developer. As someone who is passionate about cars I hope to make many additions to this passion project with the goal to serve as a tool for those who want to buy their first electric vehicle.</p>
            <h2 className='about__siteUse'>How to use the site</h2>
            <p className='explainer'> As a prospective buyer you may click on any vehicle of interest, see it's specifications, contact the dealership, see its location, and see its pricing information. More features to come!  As a dealership you may login to edit, add, or delete a vehicle from your dealership's inventory. More features to come!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
