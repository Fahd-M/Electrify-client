import "./VehicleElement.scss";
import { Link } from "react-router-dom";
import React from 'react-router-dom'
import editIcon from "../../assets/icons/edit-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";

function VehicleElement({ 
  make, 
  model,
  trim,
  powertrain,
  id,
  image,
  showDeleteModal,
}) {
  return (
    <li className="vehicle-item">
      <div className="vehicle-item__details">
        <Link 
          className="vehicle-item__link"
          to={`/vehicles/${id}`}
        >
          <img className="vehicle-item__img" src={`${process.env.REACT_APP_API_URL}${image}`} alt="vehicle name" />
          <h4 className="vehicle-item__make">{make}</h4>
          <p className="vehicle-item__feature"> Model: {model} </p>
          <p className="vehicle-item__feature"> Trim: {trim} </p>
          <p className="vehicle-item__feature"> Powertrain: {powertrain} </p>
        </Link>
      </div>

      <div className="vehicle-item__actions">
          <button
            className="vehicle-item__delete-button"
            type="button"
            onClick={() => {
              showDeleteModal(make, model, trim, id);
            }}
          >
            <img
              className="vehicle-item__action-icon"
              src={deleteIcon}
              alt="Delete icon"
            />
          </button>
          <Link to={`/vehicles/edit/${id}`}>
            <img
              className="vehicle-item__action-icon"
              src={editIcon}
              alt="Edit icon"
            />
          </Link>
        </div>

    </li>

  );
}

export default VehicleElement