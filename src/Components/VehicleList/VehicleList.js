import React from 'react'
import './VehicleList.scss';

import VehicleElement from '../../Components/VehicleElement/VehicleElement';

function VehicleList({vehicles}) {
  return (
    <div className="vehicles-wrapper">
      <ul className="vehicles-list">
        {vehicles.map((vehicle) => {
          return (
            <VehicleElement 
              key={vehicle.id}
              id={vehicle.id}
              make={vehicle.make}
              model={vehicle.model}
              trim={vehicle.trim}
              powertrain={vehicle.powertrain}
              image={vehicle.image}
              />
          )
        })}
      </ul>
    </div>
  )
}

export default VehicleList