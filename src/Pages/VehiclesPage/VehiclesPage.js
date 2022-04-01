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

  showDeleteModal = (make, model, trim, id) => {
    this.setState({ show: true, toDelete: {make:make, model:model, trim:trim, id:id} });

  };

  hideDeleteModal = () => {
      this.setState({ show:false, toDelete:{} });
  };

  deleteVehicle = () => {
      let currentID = this.state.toDelete.id;
      axios
          .delete(`${process.env.REACT_APP_API_URL}/vehicles/${currentID}`)
          .then((response) => {
              this.setState({
                  vehicles: response.data,
                  toDelete:{},
                  show:false
              })
          })
          .catch((error) => {
              console.log(error);
          })
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
        <VehicleList 
          vehicles={this.state.vehicles}
          showDeleteModal={this.showDeleteModal} 
        /> 
        <DeleteVehicle 
          show={this.state.show}
          hideDeleteModal={this.hideDeleteModal}
          deleteVehicle={this.deleteVehicle}
          vehicleName={this.state.toDelete.make}
          vehicleModel={this.state.toDelete.model}
          vehicleTrim={this.state.toDelete.trim}          
        />
      </>
    );
  }
}


export default VehiclesPage;