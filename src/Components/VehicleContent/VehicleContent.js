import React from 'react';
import './VehicleContent.scss';

function VehicleContent() {
  return (
    <>
      <div class="vehicleContent">
        <div className="vehicleContent__img">
            Image of vehicle
        </div>
        <div className='vehicleContent__textArea'>
          <div className='vehicleContent__text vehicleContent__specsOne'>
            Spec1
          </div>
          <div className='vehicleContent__text vehicleContent__specsTwo'>
            Spec2
          </div>
        </div>
      </div>
    </>
    
  )
}

export default VehicleContent