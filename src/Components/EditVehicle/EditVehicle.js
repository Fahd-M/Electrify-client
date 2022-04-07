import { Component } from "react";
import "./EditVehicle.scss";
import error from "../../assets/icons/error-24px.svg";

import backArrow from "../../assets/icons/arrow_back-24px.svg";
import axios from "axios";
import { Link } from "react-router-dom";
class EditVehicle extends Component {
  state = {
    dealerships:[],//create empty dealership array 

    id: "",
    dealerId: "",
    make: "",
    model: "",
    trim: "",
    basePrice: "",
    powertrain: "",
    
    engineSpec1:"",
    engineSpec2:"",
    engineSpec3:"",
    drivetrain: "",
    horsepower: "",
    batteryType:"",
    batteryCapacity:"",
    chargeTimeMech: "",
    chargeTimeL1:"",
    chargeTimeL2:"",
    chargeTimeL3:"",
    range: "",
    efficiency: "",
    airbags: "",
    seats: "",
    electricWarrantyComponents: "",
    electricWarrantyBattery:"",


    makevalid: false,
    modelvalid: false,
    trimvalid: false,
    basePricevalid: false,
    powertrainvalid: false,
    engineSpec1valid: false,
    engineSpec2valid: false,
    engineSpec3valid: false,
    drivetrainvalid: false,
    horsepowervalid: false,
    batteryTypevalid: false,
    batteryCapacityvalid: false,
    chargeTimeMechvalid: false,
    chargeTimeL1valid: false,
    chargeTimeL2valid: false,
    chargeTimeL3valid: false,
    rangevalid: false,
    efficiencyvalid: false,
    airbagsvalid: false,
    seatsvalid: false,
    electricWarrantyComponentsvalid: false,
    electricWarrantyBatteryvalid: false,

    formvalid: false

  };

  // function gets id of the vehicle and send a get axios request
  getVehicleById = () => {
    let currentID = this.props.match.params.id;
    axios
      .get(`${process.env.REACT_APP_API_URL}/vehicles/${currentID}`)
      .then((res) => {
        // if the axios request is successful the component is updated and data is updated in fields accordingly
        this.setState({

          id: res.data.id,
          dealerId: res.data.dealerId,
          make: res.data.make,
          model: res.data.model,
          trim: res.data.trim,
          basePrice: res.data.basePrice,
          powertrain: res.data.powertrain,
          
          engineSpec1:res.data.engine.engineSpec1,
          engineSpec2:res.data.engine.engineSpec2,
          engineSpec3:res.data.engine.engineSpec3,
          drivetrain: res.data.drivetrain,
          horsepower: res.data.horsepower,
          batteryType:res.data.battery.batteryType,
          batteryCapacity:res.data.battery.batteryCapacity,
          chargeTimeMech: res.data.chargeTime.mechanism,
          chargeTimeL1:res.data.chargeTime.level1,
          chargeTimeL2:res.data.chargeTime.level2,
          chargeTimeL3:res.data.chargeTime.level3,
          range: res.data.range,
          efficiency: res.data.efficiency,
          airbags: res.data.airbags,
          seats: res.data.seats,
          electricWarrantyComponents: res.data.electricWarranty.components,
          electricWarrantyBattery:res.data.electricWarranty.battery,
          

        });
      })
      .catch((result) => {
        console.log(result);
      });
  };  

  handleSubmit = (e) => {
    e.preventDefault();
    let currentID = this.props.match.params.id;
    if (this.state.formvalid) {
      const updatedData = {
        make: this.state.make,
        model: this.state.model,
        trim: this.state.trim,
        basePrice: this.state.basePrice,
        powertrain:this.state.powertrain,
        engineSpec1: this.state.engineSpec1,
        engineSpec2: this.state.engineSpec2,
        engineSpec3: this.state.engineSpec3,
        drivetrain: this.state.drivetrain,
        horsepower: this.state.horsepower,
        batteryType: this.state.batteryType,
        batteryCapacity: this.state.batteryCapacity,

        chargeTimeMech: this.state.chargeTimeMech,
        chargeTimeL1: this.state.chargeTimeL1,
        chargeTimeL2: this.state.chargeTimeL2,
        chargeTimeL3: this.state.chargeTimeL3,
        range: this.state.range,
        efficiency: this.state.efficiency,
        airbags: this.state.airbags,
        seats: this.state.seats,
        electricWarrantyComponents: this.state.electricWarrantyComponents,
        electricWarrantyBattery: this.state.electricWarrantyBattery
      };
      
      const updateVehicle = axios.put(
        `${process.env.REACT_APP_API_URL}/vehicles/${currentID}`,
        updatedData
      );
      updateVehicle
        .then((res) => {
          window.alert(res.data);
          this.props.history.push(`/vehicles/${currentID}`);
        })
        .catch((error) => {
          window.alert(error);
        });
    }
  };  

  // OnChangeDealership = (e) => {
  //   this.setState({
  //     dealerships: { ...this.state.dealerships, warehouseName: e.target.value },
  //   });

    //any input change is updated and field validation is called to check if input is in acceptable format
  handleChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        this.validateField(event.target, event.target.value);
      }
    );
  };

    //takes in field and its value to check if value is in acceptable format according to the field
  validateField(field, value) {
    let makevalidation = this.state.makevalid;
    let modelvalidation = this.state.modelvalid;
    let trimvalidation = this.state.trimvalid;
    let basePricevalidation = this.state.basePricevalid;
    let powertrainvalidation = this.state.powertrainvalid;

    let engineSpec1validation = this.state.engineSpec1valid;
    let engineSpec2validation = this.state.engineSpec2valid;
    let engineSpec3validation = this.state.engineSpec3valid;
    let drivetrainvalidation = this.state.drivetrainvalid;
    let horsepowervalidation = this.state.horsepowervalid;
    let batteryTypevalidation = this.state.batteryTypevalid;
    let batteryCapacityvalidation = this.state.batteryCapacityvalid;
    let chargeTimeMechvalidation = this.state.chargeTimeMechvalid;
    let chargeTimeL1validation = this.state.chargeTimeL1valid;
    let chargeTimeL2validation = this.state.chargeTimeL2valid;
    let chargeTimeL3validation = this.state.chargeTimeL3valid;
    let rangevalidation = this.state.rangevalid;
    let efficiencyvalidation = this.state.efficiencyvalid;
    let airbagsvalidation = this.state.airbagsvalid;
    let seatsvalidation = this.state.seatsvalid;
    let electricWarrantyComponentsvalidation = this.state.electricWarrantyComponentsvalid;
    let electricWarrantyBatteryvalidation = this.state.electricWarrantyBatteryvalid;

    
    const re = /^[a-zA-Z0-9]/;
    const emailRe = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const addRe = /[A-za-z0–9_]/;
    const phoneRe = /^[0-9]{11}$/;
    switch (field.name) {
      case "make":
        makevalidation = re.test(value);
        this.showInputError(field, makevalidation);
        break;
      case "model":
        modelvalidation = re.test(value);
        this.showInputError(field, modelvalidation);
        break;
      case "trim":
        trimvalidation = re.test(value);
        this.showInputError(field, trimvalidation);
        break;
      case "basePrice":
        basePricevalidation = re.test(value);
        this.showInputError(field, basePricevalidation);
        break;
      case "powertrain":
        powertrainvalidation = re.test(value);
        this.showInputError(field, powertrainvalidation);
        break;
      case "engineSpec1":
        engineSpec1validation = re.test(value);
        this.showInputError(field, engineSpec1validation);
        break;
      case "engineSpec2":
        engineSpec2validation = re.test(value);
        this.showInputError(field, engineSpec2validation);
        break;
      case "engineSpec3":
        engineSpec3validation = re.test(value);
        this.showInputError(field, engineSpec3validation);
        break;
      case "drivetrain":
        drivetrainvalidation = re.test(value);
        this.showInputError(field, drivetrainvalidation);
        break;
      case "horsepower":
        horsepowervalidation = re.test(value);
        this.showInputError(field, horsepowervalidation);
        break;      
      case "batteryType":
        batteryTypevalidation = re.test(value);
        this.showInputError(field, batteryTypevalidation);
        break;
      case "batteryCapacity":
        batteryCapacityvalidation = re.test(value);
        this.showInputError(field, batteryCapacityvalidation);
        break;
      case "chargeTimeMech":
        chargeTimeMechvalidation = re.test(value);
        this.showInputError(field, chargeTimeMechvalidation);
        break;
      case "chargeTimeL1":
        chargeTimeL1validation = re.test(value);
        this.showInputError(field, chargeTimeL1validation);
        break;
      case "chargeTimeL2":
        chargeTimeL2validation = re.test(value);
        this.showInputError(field, chargeTimeL2validation);
        break;
      case "chargeTimeL3":
        chargeTimeL3validation = re.test(value);
        this.showInputError(field, chargeTimeL3validation);
        break;
      case "range":
        rangevalidation = re.test(value);
        this.showInputError(field, rangevalidation);
        break;
      case "efficiency":
        efficiencyvalidation = re.test(value);
        this.showInputError(field, efficiencyvalidation);
        break;
      case "airbags":
        airbagsvalidation = re.test(value);
        this.showInputError(field, airbagsvalidation);
        break;
      case "seats":
        seatsvalidation = re.test(value);
        this.showInputError(field, seatsvalidation);
        break;  
      case "electricWarrantyComponents":
        electricWarrantyComponentsvalidation = re.test(value);
        this.showInputError(field, electricWarrantyComponentsvalidation);
        break;
      case "electricWarrantyBattery":
        electricWarrantyBatteryvalidation = re.test(value);
        this.showInputError(field, electricWarrantyBatteryvalidation);
        break;
      default:
        break;
    }
    //once the field input is validated the status is updated in state and function is called to validate form accordingly
    this.setState({
      makevalid: makevalidation,
      modelvalid: modelvalidation,
      trimvalid: trimvalidation,
      basePricevalid: basePricevalidation,
      powertrainvalid: powertrainvalidation,

      engineSpec1valid: engineSpec1validation,
      engineSpec2valid: engineSpec2validation,
      engineSpec3valid: engineSpec3validation,
      drivetrainvalid: drivetrainvalidation,
      horsepowervalid: horsepowervalidation,

      batteryTypevalid: batteryTypevalidation,
      batteryCapacityvalid: batteryCapacityvalidation,
      chargeTimeMechvalid: chargeTimeMechvalidation,
      chargeTimeL1valid: chargeTimeL1validation,
      chargeTimeL2valid: chargeTimeL2validation,

      chargeTimeL3valid: chargeTimeL3validation,
      rangevalid: rangevalidation,
      efficiencyvalid: efficiencyvalidation,
      airbagsvalid: airbagsvalidation,
      seatsvalid: seatsvalidation,
      electricWarrantyComponentsvalid: electricWarrantyComponentsvalidation,
      electricWarrantyBatteryvalid: electricWarrantyBatteryvalidation,      

    }, this.validateForm);
  }
    //checks if the form is valid after every changed in the field and updates the status
    validateForm() {
      this.setState({
        formvalid: this.state.makevalid &&
        this.state.modelvalid &&
        this.state.trimvalid &&
        this.state.basePricevalid &&
        this.state.powertrainvalid &&
  
        this.state.engineSpec1valid &&
        this.state.engineSpec2valid &&
        this.state.engineSpec3valid &&
        this.state.drivetrainvalid &&
  
        this.state.horsepowervalid &&
        this.state.batteryTypevalid &&
        this.state.batteryCapacityvalid &&
        this.state.chargeTimeMechvalid &&
  
        this.state.chargeTimeL1valid &&
        this.state.chargeTimeL2valid &&
        this.state.basePricevalid &&
        this.state.chargeTimeL3valid &&
        
        this.state.rangevalid &&
        this.state.efficiencyvalid &&
        this.state.airbagsvalid &&
  
        this.state.seatsvalid &&
        this.state.electricWarrantyComponentsvalid &&
        this.state.electricWarrantyBatteryvalid 
  
      })
    }
  showInputError(field, status) {
    if (!status) {
      field.classList.add("details__input--error");
      field.nextSibling.style.display = "block";

    } else {
      field.classList.remove("details__input--error");
      field.nextSibling.style.display = "none";

    }
  }
  componentDidMount() {
    this.getVehicleById();
    this.getAllDealerships();
  }



  //Function to get the list of dealerships
  getAllDealerships() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/dealerships`)
      .then((response) => {
        this.setState({
          dealerships: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="box-shadow">
        <div className="edit-vehicle__subheader">
          <Link to="/vehicles">
            <img src={backArrow} alt="back arrow" className="back-icon" />
          </Link>
          <h2 className="subheader__text">Edit Vehicle</h2>
        </div>
        <form
          className="edit-vehicle__details"
          id="vehicle-form"
          onSubmit={this.handleSubmit}
        >
          <div className="details__container">
            <h3 className="details__subheader">Vehicle Details</h3>
            <div className="details__form">

              <label htmlFor="make" className="details__label">
                Vehicle Make
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Vehicle Make"
                id="make"
                name="make"
                value={this.state.make}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>

              <label htmlFor="model" className="details__label">
                Vehicle Model
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Vehicle Model"
                id="model"
                name="model"
                value={this.state.model}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>

              <label htmlFor="trim" className="details__label">
                Vehicle Trim
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Trim"
                id="trim"
                name="trim"
                value={this.state.trim}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>

              <label htmlFor="basePrice" className="details__label">
                Base Price(CAD)
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Base Price"
                id="basePrice"
                name="basePrice"
                value={this.state.basePrice}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>

              <label htmlFor="powertrain" className="details__label">
                Powertrain
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Powertrain"
                id="powertrain"
                name="powertrain"
                value={this.state.powertrain}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>

              <label htmlFor="engineSpec1" className="details__label">
                Engine Specification
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Engine Specification"
                id="engineSpec1"
                name="engineSpec1"
                value={this.state.engineSpec1}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>

              <label htmlFor="engineSpec2" className="details__label">
                Engine Specification
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Engine Specification"
                id="engineSpec2"
                name="engineSpec2"
                value={this.state.engineSpec2}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>

              <label htmlFor="engineSpec3" className="details__label">
                Engine Specification
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Engine Specification"
                id="engineSpec3"
                name="engineSpec3"
                value={this.state.engineSpec3}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>


              <label htmlFor="drivetrain" className="details__label">
                Drivetrain
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Drivetrain"
                id="drivetrain"
                name="drivetrain"
                value={this.state.drivetrain}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>

              <label htmlFor="horsepower" className="details__label">
                Horsepower
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Horsepower"
                id="horsepower"
                name="horsepower"
                value={this.state.horsepower}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>

              <label htmlFor="batteryType" className="details__label">
                Battery Type
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Battery Type"
                id="batteryType"
                name="batteryType"
                value={this.state.batteryType}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>              

              <label htmlFor="batteryCapacity" className="details__label">
                Battery Capacity(kwH energy)
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Battery Capacity"
                id="batteryCapacity"
                name="batteryCapacity"
                value={this.state.batteryCapacity}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>                  


              <label htmlFor="chargeTimeMech" className="details__label">
                Mechanism to charge battery
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Mechanism"
                id="chargeTimeMech"
                name="chargeTimeMech"
                value={this.state.chargeTimeMech}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>         


              <label htmlFor="chargeTimeL1" className="details__label">
                Charge Time at Level 1 120V(hours)
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="120V charge time"
                id="chargeTimeL1"
                name="chargeTimeL1"
                value={this.state.chargeTimeL1}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>

              <label htmlFor="chargeTimeL2" className="details__label">
                Charge Time at Level 2 240V(hours)
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="240V charge time"
                id="chargeTimeL2"
                name="chargeTimeL2"
                value={this.state.chargeTimeL2}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>


              <label htmlFor="chargeTimeL3" className="details__label">
                Charge Time at Level 3 400-Volt to 900-Volt(hours)
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="400V+ charge time"
                id="chargeTimeL3"
                name="chargeTimeL3"
                value={this.state.chargeTimeL3}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>

              <label htmlFor="range" className="details__label">
                Driving Range(KM)(fuel/EV/Combined)
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Range"
                id="range"
                name="range"
                value={this.state.range}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>



              <label htmlFor="efficiency" className="details__label">
                Driving Efficiency(city/highway/combined/electric combined)
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Efficiency"
                id="efficiency"
                name="efficiency"
                value={this.state.efficiency}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>


              <label htmlFor="airbags" className="details__label">
                Number of Airbags
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Airbags"
                id="airbags"
                name="airbags"
                value={this.state.airbags}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>



              <label htmlFor="seats" className="details__label">
                Number of Seats
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Seats"
                id="seats"
                name="seats"
                value={this.state.seats}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>



              <label htmlFor="electricWarrantyComponents" className="details__label">
                Electric Component Warranty
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Electric Component Warranty"
                id="electricWarrantyComponents"
                name="electricWarrantyComponents"
                value={this.state.electricWarrantyComponents}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>


              <label htmlFor="electricWarrantyBattery" className="details__label">
                Electric Battery Warranty
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Electric Battery Warranty"
                id="electricWarrantyBattery"
                name="electricWarrantyBattery"
                value={this.state.electricWarrantyBattery}
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>

              <label htmlFor="dealership" className="details__label">
                Dealership
              </label>
              <div className="select-container">
                <select
                  name="dealership"
                  id="dealership"
                  className="dealership__select"
                  // onChange={this.OnChangeDealership}
                >
                  <option value="Select">Select</option>
                  {this.state.dealerships.map((dealership) => (
                    <option key={dealership.id} value={dealership.make}>{dealership.make}</option>
                  ))}
                  
                </select>
                <p className="details__err">
                  <img className="details__err--img" src={error} alt="error" />{" "}
                  This field is required
                </p>
              </div>


            </div>
          </div>

        </form>

        <div id="buttons">
          <Link to="/vehicles" className="cancel-btn">
            Cancel
          </Link>
          <button
            type="submit"
            form="vehicle-form"
            className="save-btn"
            id="save-vehicle"
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default EditVehicle