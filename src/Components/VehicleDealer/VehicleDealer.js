import React from 'react';
import ContactDealershipButton from '../ContactDealershipButton/ContactDealershipButton';
import './VehicleDealer.scss';

function VehicleDealer(  { vehicleDealership }) {



  return (

    <div className='vehicleDealer'>
      <div class="vehicleDealerInfo">
        <div className="vehicleDealer__img">
          <img className="vehicleDealer__imageDP" src={`${process.env.REACT_APP_API_URL}${vehicleDealership.image}`} alt="dealership map" />
        </div>
        <div className='vehicleDealer__textArea'>
          <ul className='vehicleDealer__list '>
            <li>{vehicleDealership.make}</li>
            <li>{vehicleDealership.address.street}</li>
            <li>{vehicleDealership.address.city}</li>
            <li>{vehicleDealership.address.province}</li>
            <li>{vehicleDealership.address.postalCode}</li>
            <li>{vehicleDealership.phone}</li>
            <li>{vehicleDealership.email}</li> 
          </ul>
        </div>
      </div>
      <ContactDealershipButton />
    </div>
    
  

  )
}

export default VehicleDealer