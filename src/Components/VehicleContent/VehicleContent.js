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
            <p className="vehicleContent__specsOne--text"> <span className="specsLabel"> Powertrain: </span> {selectedVehicle.powertrain} </p>
            <ul className="vehicleContent__list vehicleContent__list--engine"> Engine:
              <li className="vehicleContent__listItem"> 1. {selectedVehicle.engine.engineSpec1} </li>
              <li className="vehicleContent__listItem"> 2. {selectedVehicle.engine.engineSpec2} </li>
              <li className="vehicleContent__listItem"> 3. {selectedVehicle.engine.engineSpec3} </li>
            </ul>
            <p className="vehicleContent__specsOne--text"> <span className="specsLabel"> Drivetrain:</span> {selectedVehicle.drivetrain} </p>
            <p className="vehicleContent__specsOne--text"> <span className="specsLabel"> Horsepower ( hp ):</span> {selectedVehicle.horsepower} </p>
            <p className="vehicleContent__specsOne--text"> <span className="specsLabel"> Airbags:</span> {selectedVehicle.airbags} </p>
            <p className="vehicleContent__specsOne--text"> <span className="specsLabel"> Seats:</span> {selectedVehicle.seats} </p>
          </div>
          <div className='vehicleContent__text vehicleContent__specsTwo'>
            {/* <p className="vehicleContent__specsTwo--text"> {selectedVehicle.powertrain} </p> */}
            <ul className="vehicleContent__list vehicleContent__list--battery"> <span className="specsLabel"> Battery:</span>
              <li className="vehicleContent__listItem">  <span className="specsLabel">Type:</span>{selectedVehicle.battery.type} </li>
              <li className="vehicleContent__listItem">  <span className="specsLabel">Capacity:</span>{selectedVehicle.battery.capacity} </li>
            </ul>
            <ul className="vehicleContent__list vehicleContent__list--chargeTime"> <span className="specsLabel">Charge Time ( hours ):</span>
              <li className="vehicleContent__listItem">  <span className="specsLabel">Mechanism:</span>{selectedVehicle.chargeTime.mechanism} </li>
              <li className="vehicleContent__listItem">  <span className="specsLabel">Level 1:</span>{selectedVehicle.chargeTime.level1} </li>
              <li className="vehicleContent__listItem">  <span className="specsLabel">Level 2:</span>{selectedVehicle.chargeTime.level2} </li>
              <li className="vehicleContent__listItem">  <span className="specsLabel">Level 3:</span>{selectedVehicle.chargeTime.level3} </li>
            </ul>
            <p className="vehicleContent__specsTwo--text"> <span className="specsLabel">Range (Fuel/EV/Combined)(km):</span> {selectedVehicle.range} </p>
            <p className="vehicleContent__specsTwo--text"> 
              <span className="specsLabel">Fuel Efficiency(L/100 KM):</span> 
              
                {selectedVehicle.efficiency} 
            </p>
            <div className="vehicleContent__specsTwo--text">
              <p className="specsLabel">[City/Hwy/Both/Electric(both)]</p>
            </div>
          </div>
          <div className='vehicleContent__text vehicleContent__specsThree'>
            <ul className="vehicleContent__list vehicleContent__list--warranty"> <span className="specsLabel">Electric Warranty:</span>
                <li className="vehicleContent__listItem">  <span className="specsLabel">Component-related:</span>{selectedVehicle.electricWarranty.components} </li>
                <li className="vehicleContent__listItem">  <span className="specsLabel">Battery-related:</span>{selectedVehicle.electricWarranty.battery} </li>
            </ul>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default VehicleContent