import React from 'react';
import './VehicleContent.scss';

function VehicleContent( { selectedVehicle }) {
  return (
    <>
      <div class="vehicleContent">
        <div className="vehicleContent__img">
          <img className="vehicleContent__imageDP" src={`${process.env.REACT_APP_API_URL}${selectedVehicle.image}`} alt="vehicle name" />
        </div>
        <div className='vehicleContent__textArea'>
          <div className='vehicleContent__text vehicleContent__specsOne'>
            <p className="vehicleContent__specsOne--text"> {selectedVehicle.powertrain} </p>
            <ul className="vehicleContent__list vehicleContent__list--engine"> Engine:
              <li className="vehicleContent__listItem"> 1. {selectedVehicle.engine.engineSpec1} </li>
              <li className="vehicleContent__listItem"> 2. {selectedVehicle.engine.engineSpec2} </li>
              <li className="vehicleContent__listItem"> 3. {selectedVehicle.engine.engineSpec3} </li>
            </ul>
            <p className="vehicleContent__specsOne--text"> Drivetrain: {selectedVehicle.drivetrain} </p>
            <p className="vehicleContent__specsOne--text"> Horsepower: {selectedVehicle.horsepower} </p>
            <p className="vehicleContent__specsOne--text"> Airbags: {selectedVehicle.airbags} </p>
            <p className="vehicleContent__specsOne--text"> Seats: {selectedVehicle.seats} </p>
          </div>
          <div className='vehicleContent__text vehicleContent__specsTwo'>
            <p className="vehicleContent__specsTwo--text"> {selectedVehicle.powertrain} </p>
            <ul className="vehicleContent__list vehicleContent__list--battery"> Battery:
              <li className="vehicleContent__listItem">  Type:{selectedVehicle.battery.type} </li>
              <li className="vehicleContent__listItem">  Capacity:{selectedVehicle.battery.capacity} </li>
            </ul>
            <ul className="vehicleContent__list vehicleContent__list--chargeTime"> Charge Time:
              <li className="vehicleContent__listItem">  Mechanism:{selectedVehicle.chargeTime.mechanism} </li>
              <li className="vehicleContent__listItem">  Level 1:{selectedVehicle.chargeTime.level1} </li>
              <li className="vehicleContent__listItem">  Level 2:{selectedVehicle.chargeTime.level2} </li>
              <li className="vehicleContent__listItem">  Level 3:{selectedVehicle.chargeTime.level3} </li>
            </ul>
            <p className="vehicleContent__specsTwo--text"> Range using Fuel/EV/Combined: {selectedVehicle.range} </p>
            <p className="vehicleContent__specsTwo--text"> Fuel Efficiency as City/Highway/Combined/Combined Electric {selectedVehicle.efficiency} </p>
          </div>
          <div className='vehicleContent__text vehicleContent__specsThree'>
            <ul className="vehicleContent__list vehicleContent__list--warranty"> Electric Warranty:
                <li className="vehicleContent__listItem">  Component-related:{selectedVehicle.electricWarranty.components} </li>
                <li className="vehicleContent__listItem">  Battery-related:{selectedVehicle.electricWarranty.battery} </li>
            </ul>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default VehicleContent