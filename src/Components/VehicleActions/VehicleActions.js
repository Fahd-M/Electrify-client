import React from 'react';
import './VehicleActions.scss';
import EditButton from '../EditButton/EditButton';
import AddVehicleButton from '../AddVehicleButton/AddVehicleButton';
import { Link } from "react-router-dom";

function VehicleActions() {
  return (
    <>
    
    <EditButton />
    <div className='prevPage'>
        <Link 
            className='prevPage__button'
            to="/vehicles"
        >
            Back to All Vehicles
        </Link>
    </div>
    <AddVehicleButton />
    </>
  )
}

export default VehicleActions