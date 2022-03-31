import React from 'react';
import "./AddVehicleButton.scss";
import { Link } from "react-router-dom";

function AddVehicleButton() {
  return (
    <div className='addVehicle'>
        <Link 
            className='addVehicle__button'
            to="/vehicles/add"
        >
            Add Vehicle
        </Link>
    </div>
  )
}

export default AddVehicleButton