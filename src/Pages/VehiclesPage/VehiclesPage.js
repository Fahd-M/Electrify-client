import axios from "axios";
import { Component, useEffect, useState } from "react";
import VehicleList from '../../Components/VehicleList/VehicleList';
import DeleteVehicle from '../../Components/DeleteVehicle/DeleteVehicle';
import './VehiclesPage.scss';
import PageIntro from "../../Components/PageIntro/PageIntro";
import AddVehicleButton from "../../Components/AddVehicleButton/AddVehicleButton";


class VehiclesPage extends Component {
  state = {
    vehicles: [],
    show:false,
    toDelete:{}
  }

  componentDidMount() {
    this.getAllVehicles();
  }

  getAllVehicles(){

    axios.get(`${process.env.REACT_APP_API_URL}/vehicles`)
    .then((response) => {
        this.setState({
            vehicles:response.data,
        });
    })
    .catch((error) => {
        console.log(error);
    });
  }


  
  render() {
    return (
      <>
        <PageIntro />
        <AddVehicleButton />
        <VehicleList vehicles={this.state.vehicles} /> 
        {/* <DeleteVehicle /> */}
      </>
    );
  }
}


export default VehiclesPage;