//import React from 'react';
import "./ContactDealershipForm.scss";
import axios from "axios";
import { Component } from "react";
import error from "../../assets/icons/error-24px.svg";
import React, { useRef } from "react";
//import emailjs from "@emailjs/browser";

class ContactDealershipForm extends Component {
  //form = useRef();

  //   state = {
  //     dealerships: [],
  // name: "",
  // email: "",
  // phone: "",
  // vehicleInfo: "",
  // message: "",

  // namevalid: false,
  // emailvalid: false,
  // phonevalid: false,
  // vehicleInfovalid: false,
  // messageValid: false,

  // formvalid: false,
  //};

  //   componentDidMount() {
  //     this.getAllDealerships();
  //   }

  //   //Function to get the list of dealerships
  //   getAllDealerships() {
  //     axios
  //       .get(`${process.env.REACT_APP_API_URL}/dealerships`)
  //       .then((response) => {
  //         this.setState({
  //           dealerships: response.data,
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }

  // this tracks each field and adds to the state.
  // Once the state is changed it checks if the input is valid
  //   handleChange = (event) => {
  //     this.setState(
  //       {
  //         [event.target.name]: event.target.value,
  //       },
  //       () => {
  //         this.validateField(event.target, event.target.value);
  //       }
  //     );
  //   };

  //takes in field that has been changed and its values and checks
  // if the value is valid according to the required format.
  // Then it changes the state of of field validity accordingly.
  // Once the field valididy status is updated it calls to confirm
  // if the form is valid.

  //   validateField(field, value) {
  //     let namevalidation = this.state.namevalid;
  //     let emailvalidation = this.state.emailvalid;
  //     let phonevalidation = this.state.phonevalid;
  //     let vehicleInfovalidation = this.state.vehicleInfovalid;
  //     let messagevalidation = this.state.messagevalid;

  //     const re = /^[a-zA-Z0-9]/;
  //     const emailRe =
  //       /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     const addRe = /[A-za-z0–9_]/;
  //     const phoneRe = /^[0-9]{10}$/;

  //     switch (field.name) {
  //       case "name":
  //         namevalidation = re.test(value);
  //         this.showInputError(field, namevalidation);
  //         break;
  //       case "email":
  //         emailvalidation = emailRe.test(value);
  //         this.showInputError(field, emailvalidation);
  //         break;

  //       case "phone":
  //         const phonetrim = value.replace(/\D/g, "");
  //         phonevalidation = phoneRe.test(phonetrim);
  //         this.showInputError(field, phonevalidation);

  //         break;
  //       case "vehicleInfo":
  //         vehicleInfovalidation = re.test(value);
  //         this.showInputError(field, vehicleInfovalidation);
  //         break;

  //       case "message":
  //         messagevalidation = re.test(value);
  //         this.showInputError(field, messagevalidation);
  //         break;

  //       default:
  //         break;
  //     }

  //     this.setState(
  //       {
  //         namevalid: namevalidation,
  //         emailvalid: emailvalidation,
  //         phonevalid: phonevalidation,
  //         vehicleInfovalid: vehicleInfovalidation,
  //         messagevalid: messagevalidation,
  //       },
  //       this.validateForm
  //     );
  //   }

  //   //checks if the form is valid after every changed in the field and updates the status
  //   validateForm() {
  //     this.setState({
  //       formvalid:
  //         this.state.namevalid &&
  //         this.state.emaillvalid &&
  //         this.state.phonevalid &&
  //         this.state.vehicleInfovalid &&
  //         this.state.messagevalid,
  //     });
  //   }

  //   //checks if the fieldValid state is true
  //   isTrue(fieldValid) {
  //     return fieldValid === true;
  //   }
  //   //takes in field and validity of the field to render error
  //   showInputError(field, status) {
  //     if (!status) {
  //       field.classList.add("details__input--error");
  //       field.nextSibling.style.display = "block";
  //     } else {
  //       field.classList.remove("details__input--error");
  //       field.nextSibling.style.display = "none";
  //     }
  //   }

  //form submission event handler
  //   sendEmail = (e) => {
  //     e.preventDefault();
  //     this.setState({
  //         submit: true,
  //       });
  //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'fK2MIDXw4W9_akY2Z')
  //       .then((result) => {
  //           console.log(result.text);
  //       }, (error) => {
  //           console.log(error.text);
  //       });
  //   };

  //   sendEmail = (e) => {
  //     console.log("clicked!");
  //     e.preventDefault();

  //     this.setState({
  //       submit: true,
  //     });
  //     //if form is valid it will take form field information and send post axios request
  //     if (this.state.formvalid) {
  //       emailjs
  //         .sendForm(
  //           "service_1qkv8tq",
  //           "template_fbkbwxr",
  //           form.current,
  //           "fK2MIDXw4W9_akY2Z"
  //         )
  //         .then(
  //           (result) => {
  //             console.log(result.text);
  //           },
  //           (error) => {
  //             console.log(error.text);
  //           }
  //         );
  //     } else {
  //       const inputlist = e.target.querySelectorAll("input");
  //       inputlist.forEach((field) => {
  //         this.validateField(field, field.value);
  //       });
  //     }
  //   };

  render() {
    return (
      <>
        <div className="page">
          <form
            className="contactDealer"
            id="contact-form"
            //   onSubmit={this.sendEmail}
            ref={this.form}
          >
            <div className="details__container">
              <h3 className="details__subheader">Contact Details</h3>
              <div className="details__form">
                <label htmlFor="name" className="details__label">
                  Name
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

                <label htmlFor="phone" className="details__label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="details__input"
                  placeholder="Phone"
                  id="phone"
                  name="phone"
                  onChange={this.handleChange}
                />
                <p className="details__err">
                  <img className="details__err--img" src={error} alt="error" />{" "}
                  This field is required
                </p>

                <label htmlFor="vehicle-modeltrim" className="details__label">
                  Vehicle Model and Trim
                </label>
                <input
                  type="text"
                  className="details__input"
                  placeholder="Vehicle Model and Trim"
                  id="vehicle-modeltrim"
                  name="vehicle-mamodeltrimke"
                  onChange={this.handleChange}
                />
                <p className="details__err">
                  <img className="details__err--img" src={error} alt="error" />{" "}
                  This field is required
                </p>

                <label htmlFor="message" className="details__label">
                  Message
                </label>
                <textarea
                  //type="text"
                  className="details__input details__input--message"
                  placeholder="Message to Dealership"
                  id="message"
                  name="message"
                  rows="8"
                  onChange={this.handleChange}
                ></textarea>
                <p className="details__err">
                  <img className="details__err--img" src={error} alt="error" />{" "}
                  This field is required
                </p>

                <label htmlFor="dealership" className="details__label">
                  Dealership
                </label>
                <select
                    name="dealership"
                    id="dealership"
                    className="dealership__select"
                >
                    <option value="Select">Select</option>
                    <option value="1">Toyota</option>
                    <option value="2">Honda</option>
                    <option value="3">Nissan</option>
                    <option value="4">Mitsubishi</option>
                    <option value="5">Hyundai</option>
                </select>
                {/* <div className="select-container">
                  <select
                    name="dealership"
                    id="dealership"
                    className="dealership__select"
                  >
                    <option value="Select">Select</option>
                    {this.state.dealerships.map((dealership) => (
                      <option key={dealership.id} value={dealership.id}>
                        {dealership.make}
                      </option>
                    ))}
                  </select>
                  <p className="details__err">
                    <img
                      className="details__err--img"
                      src={error}
                      alt="error"
                    />{" "}
                    This field is required
                  </p>
                </div> */}
              </div>
            </div>
          </form>
          <div className="buttons">
            <button
              type="submit"
              form="contact-form"
              className="send-btn"
              id="contact-dealer"
            >
              Send Message
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default ContactDealershipForm;
