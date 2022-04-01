
import './DeleteVehicle.scss';
import { Component } from "react";

class DeleteVehicle extends Component {
  render() {
    const showHideClassName = this.props.show
      ? "delete-vehicle__container delete-vehicle__container--block"
      : "delete-vehicle__container delete-vehicle__container--none";

    return (
      <>
        <div className={showHideClassName}>
          <div className="delete-vehicle__wrapper">
            <div className="delete-vehicle__container--top">
              <h1 className="delete-vehicle__header">
                {" "}
                Delete vehicle {this.props.vehicleName} {this.props.vehicleModel} {this.props.vehicleTrim}?
              </h1>
              <p className="delete-vehicle__text">
                Please confirm that you'd like to delete the{" "}
                vehicle {this.props.vehicleName} {this.props.vehicleModel} {this.props.vehicleTrim} from the list of vehicles. You
                won't be able to undo this action.{" "}
              </p>
            </div>
            <div className="delete-vehicle__container--bottom">
              <button
                type="button"
                className="delete-vehicle__cancel-btn"
                onClick={this.props.hideDeleteModal}
              >
                Cancel
              </button>
              <button
                type="button"
                className="delete-vehicle__delete-btn"
                onClick={this.props.deleteVehicle}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DeleteVehicle
