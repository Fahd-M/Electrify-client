import axios from "axios";
import { Component, useEffect, useState } from "react";
import VehicleList from '../../Components/VehicleList/VehicleList';
import DeleteVehicle from '../../Components/DeleteVehicle/DeleteVehicle';
import './VehiclesPage.scss';

function VehiclesPage() {
  return (
    <>
      <VehicleList /> 
      <DeleteVehicle />
    </>
  );
}


export default VehiclesPage;