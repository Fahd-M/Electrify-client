import './VehicleDetailsPage.scss';
import axios from 'axios';
import { Component } from "react";
import { Link } from "react-router-dom";
import backIcon from '../../assets/icons/arrow_back-24px.svg';

import VehicleActions from '../../Components/VehicleActions/VehicleActions';
import VehicleContent from '../../Components/VehicleContent/VehicleContent';
import VehicleDealer from '../../Components/VehicleDealer/VehicleDealer';
// import VehicleIntro from '../../Components/VehicleIntro/VehicleIntro';

class VehicleDetailsPage extends Component {
  
  // render a vehicle details component that is
  // responsible for displaying a singular vehicle
  // details(by ID in the URL params), as well as the 
  // singular dealership details for that vehicle


  state = {
     
    selectedVehicle:null, // selected vehicle which will have its details displayed from vehicles.json
    vehicleDealership:null,
     // singular dealership that has an ID that matches dealerID from vehicles.json
    show:false,
    toDelete:{}
  }


  getDealershipByDealerId = (dealerID) => {
    axios.get(`${process.env.REACT_APP_API_URL}/dealerships/${dealerID}`)
    .then((response) => {
        this.setState({
            vehicleDealership: response.data,
        })
    })
    .catch((error) => {
        console.log(error);
    });
  }

    // Function to fetch a single vehicles's details via an ID in the URL params
  getVehicleById = (vehicleID) => {

    
    axios
      .get(`${process.env.REACT_APP_API_URL}/vehicles/${vehicleID}`)
      .then( (res) => {
        this.setState(
          {
            selectedVehicle: res.data,

          }
        )
        this.getDealershipByDealerId(res.data.dealerId)
      })
      .catch( (result) => {
        console.log(result);
      })
  }

  // Upon mounting, call getVehicleById to fetch all required details to display component
  componentDidMount = () => {
    this.getVehicleById(this.props.match.params.id);
  }
  


  render() {


    return (
      <>
        <div className="vehicle">VehicleDetailsPage</div>
        {this.state.selectedVehicle &&
          <div className='vehicleIntro'>
            <div className='vehicleIntro__make vehicleIntro__feature'>
              {this.state.selectedVehicle.make}
            </div>
            <div className='vehicleIntro__model vehicleIntro__feature'>
            {this.state.selectedVehicle.model}
            </div>
            <div className='vehicleIntro__trim vehicleIntro__feature'>
            {this.state.selectedVehicle.trim}

            </div>
            <div className='vehicleIntro__price vehicleIntro__feature'>
            {this.state.selectedVehicle.basePrice}

            </div>

          </div>
          }


        <div className="vehicle__info">
          {this.state.selectedVehicle &&
            <VehicleContent 
              selectedVehicle={this.state.selectedVehicle}  
            />
          }



            {this.state.vehicleDealership &&
              <VehicleDealer 
                vehicleDealership={this.state.vehicleDealership}
            /> 
            }
        </div>

        <VehicleActions />
      </>
    )
  }
}

export default VehicleDetailsPage;
