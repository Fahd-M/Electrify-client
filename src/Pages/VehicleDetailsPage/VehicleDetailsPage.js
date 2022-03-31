import './VehicleDetailsPage';
import EditButton from '../../Components/EditButton/EditButton';
import axios from 'axios';
import { Component } from "react";
import { Link } from "react-router-dom";
import backIcon from '../../assets/icons/arrow_back-24px.svg';


class VehicleDetailsPage extends Component {
  render() {
    return (
      <>
        <div>VehicleDetailsPage</div>
        <EditButton />
      </>
    )
  }
}

export default VehicleDetailsPage;
