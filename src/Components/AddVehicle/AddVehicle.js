 
import './AddVehicle.scss';
import { Link } from "react-router-dom";
import error from "../../assets/icons/error-24px.svg";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import axios from "axios";
import { Component } from "react";

class AddVehicle extends Component {
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

    // give area to update dealership details too?
    // name:"",
    // address:"",
    // phone:"",
    // email:"",



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

    // namevalid:false,
    // addressvalid:false,
    // phonevalid:false,
    // emailvalid:false,

    formvalid: false
  };

  componentDidMount() {
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
  

// this tracks each field and adds to the state.
// Once the state is changed it checks if the input is valid
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


//*** THIS IS TO VALIDATE THE DROP DOWN AND TO VALIDATE THAT
//*** */ ALL FIELDS FILLED OUT
//Validation
// if (
//   e.target.dealership.value === "Select" 
// ) {
//   this.setState({err:true});
//   if (e.target.warehouse.value === "Select") {
//     warehouseField.classList.add("details__input--error");
//     warehouseField.nextSibling.style.display = "block";
//   }
// }
// else {
  
// }



//takes in field that has been changed and its values and checks 
// if the value is valid according to the required format. 
// Then it changes the state of of field validity accordingly. 
// Once the field valididy status is updated it calls to confirm 
// if the form is valid.

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


    // let namevalidation = this.state.namevalid;
    // let addressvalidation = this.state.addressvalid;
    // let phonevalidation = this.state.phonevalid;
    // let emailvalidation = this.state.emailvalid;

    const re = /^[a-zA-Z0-9]/;
    const emailRe = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const addRe = /[A-za-z0–9_]/;
    const phoneRe = /^[0-9]{10}$/;

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
      // case "name":
      //   namevalidation = re.test(value);
      //   this.showInputError(field, namevalidation);
      //   break;
      // case "address":
      //   addressvalidation = re.test(value);
      //   this.showInputError(field, addressvalidation);
      //   break;
      // case "phone":
      //   const phonetrim = value.replace(/\D/g, "");
      //   phonevalidation = phoneRe.test(phonetrim);
      //   this.showInputError(field, phonevalidation);

      //   break;
      // case "email":
      //   emailvalidation = emailRe.test(value);
      //   this.showInputError(field, emailvalidation);
      //   break;

      default:
        break;
    }
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
      // namevalid: namevalidation,
      // addressvalid: addressvalidation,
      // phonevalid: phonevalidation,
      // emailvalid: emailvalidation,

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
      // this.state.namevalid &&
      // this.state.positionvalid &&
      // this.state.phonevalid &&
      // this.state.emailvalid
    })
  }

  //checks if the fieldValid state is true
  isTrue(fieldValid){
    return fieldValid === true
  }
  //takes in field and validity of the field to render error
  showInputError(field, status) {
    if (!status) {
      field.classList.add("details__input--error");
      field.nextSibling.style.display = "block";

    } else {
      field.classList.remove("details__input--error");
      field.nextSibling.style.display = "none";
    }
  }

    //form submission event handler
  handleSubmit = (e) => {
    console.log("clicked!");
    e.preventDefault();
    this.setState({
      submit:true
    })
    //if form is valid it will take form field information and send post axios request 
    if (this.state.formvalid) {
      const newVehicle = {
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
        // name: this.state.name,: 
        // address: this.state.address,
        // phone: this.state.phone,
        // email: this.state.email,
      };
      const addVehicle = axios.post(
        `${process.env.REACT_APP_API_URL}/vehicles`,
        newVehicle
      );
      addVehicle
        .then((res) => {
          window.alert(res.data);
          this.props.history.push("/vehicles")
        })
        .catch((err) => {
          window.alert(err);
        });
    //it will check every field and validate it
    } else {
      const inputlist = e.target.querySelectorAll("input")
      inputlist.forEach((field) => {
        this.validateField(field, field.value);
      })
    }
  };

  
  render() {
    return (
      <div className="box-shadow">
        <div className="edit-vehicle__subheader">
          <Link to="/vehicles">
            <img src={backArrow} alt="back arrow" className="back-icon" />
          </Link>
          <h2 className="subheader__text">Add New Vehicle</h2>
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
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>

              <label htmlFor="basePrice" className="details__label">
                Base Price
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Base Price"
                id="basePrice"
                name="basePrice"
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
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>              

              <label htmlFor="batteryCapacity" className="details__label">
                Battery Capacity
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Battery Capacity"
                id="batteryCapacity"
                name="batteryCapacity"
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
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>         


              <label htmlFor="chargeTimeL1" className="details__label">
                Charge Time at Level 1 120V
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="120V charge time"
                id="chargeTimeL1"
                name="chargeTimeL1"
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>

              <label htmlFor="chargeTimeL2" className="details__label">
                Charge Time at Level 2 240V
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="240V charge time"
                id="chargeTimeL2"
                name="chargeTimeL2"
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>


              <label htmlFor="chargeTimeL3" className="details__label">
                Charge Time at Level 3 400-Volt to 900-Volt
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="400V+ charge time"
                id="chargeTimeL3"
                name="chargeTimeL3"
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>

              <label htmlFor="range" className="details__label">
                Driving Range
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Range"
                id="range"
                name="range"
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>



              <label htmlFor="efficiency" className="details__label">
                Driving Efficiency
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Efficiency"
                id="efficiency"
                name="efficiency"
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
{/* 
          <div className="details__container">
            <h3 className="details__subheader">Dealership Details</h3>
            <div className="details__form">
              <label htmlFor="name" className="details__label">
                Dealership Name
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Name"
                id="name"
                name="name"
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>

              <label htmlFor="address" className="details__label">
                Address
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Address"
                id="address"
                name="address"
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>
              
              <label htmlFor="phone" className="details__label">
                Phone Number
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Phone Number"
                id="phone"
                name="phone"
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>
              
              <label htmlFor="email" className="details__label">
                Email
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Email"
                id="email"
                name="email"
                onChange={this.handleChange}
              />
              <p className="details__err">
                <img className="details__err--img" src={error} alt="error" />{" "}
                This field is required
              </p>
            </div>
          </div> */}

        </form>

        <div className="buttons">
          <Link to="/vehicles" className="cancel-btn">
            Cancel
          </Link>
          <button
            type="submit"
            form="vehicle-form"
            className="save-btn"
            id ="add-vehicle"
          >
            +Add Vehicle
          </button>
        </div>
      </div>
    );
  }
}

export default AddVehicle