import React from 'react';
import ContactDealershipButton from '../ContactDealershipButton/ContactDealershipButton';
import './VehicleDealer.scss';

function VehicleDealer() {
  return (

    <div className='vehicleDealer'>
      <div class="vehicleDealerInfo">
        <div className="vehicleDealer__img">
            Map of dealership
        </div>
        <div className='vehicleDealer__textArea'>
          <ul className='vehicleDealer__list '>
            Dealership info in list
            {/* //MAP LIST HERE, maybe another component called "DealershipDetails" */}
          </ul>
        </div>
      </div>
      <ContactDealershipButton />
    </div>
    
  

  )
}

export default VehicleDealer