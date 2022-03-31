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
  state = {
    vehicle: {},
    show:false,
    toDelete:{},
  }

  // ** NEEDS TO BE FUNCTION TO GET DEALERSHIP DATA BASED ON THE VEHICLE MAKE
  // ** OR BY ID.. (want to use the DealerID in the vehicles data to pull data from the Dealers data)
  // getVehicleDetailsByDealershipId = () => {}
  // getDealershipDetailsByVehicleId = () => {}

    // Function to fetch a single vehicles's details via an ID in the URL params
  getVehicleById = () => {
    let currentID = this.props.match.params.id;
    axios
      .get(`${process.env.REACT_APP_API_URL}/vehicles/${currentID}`)
      .then( (res) => {
        this.setState(
          {
            vehicle: res.data,
          }
        )
        // this.getVehicleDetailsByDealershipId(currentID);
      })
      .catch( (result) => {
        console.log(result);
      })
  }

  // Upon mounting, call getVehicleById to fetch all required details to display component
  componentDidMount = () => {
    this.getVehicleById();
  }
  

  render() {
    return (
      <>
        <div className="vehicle">VehicleDetailsPage</div>
          <div className='vehicleIntro'>
            <div className='vehicleIntro__make vehicleIntro__feature'>
              Make
            </div>
            <div className='vehicleIntro__model vehicleIntro__feature'>
              Model
            </div>
            <div className='vehicleIntro__trim vehicleIntro__feature'>
              Trim

            </div>
            <div className='vehicleIntro__price vehicleIntro__feature'>
              Price

            </div>

          </div>
        {/* <VehicleIntro /> */}
        <VehicleContent />
        <VehicleDealer />
        <VehicleActions />
      </>
    )
  }
}

export default VehicleDetailsPage;
