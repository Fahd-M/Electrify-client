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
            <li className='vehicleDealer__listItem'>{vehicleDealership.make}</li>
            <li className='vehicleDealer__listItem'>{vehicleDealership.address.street}</li>
            <li className='vehicleDealer__listItem'>{vehicleDealership.address.city}</li>
            <li className='vehicleDealer__listItem'>{vehicleDealership.address.province}</li>
            <li className='vehicleDealer__listItem'>{vehicleDealership.address.postalCode}</li>
            <li className='vehicleDealer__listItem'>{vehicleDealership.phone}</li>
            <li className='vehicleDealer__listItem'>{vehicleDealership.email}</li> 
          </ul>
        </div>
      </div>
      <ContactDealershipButton />
    </div>
    
  

  )
}

export default VehicleDealer