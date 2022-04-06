import React from 'react';
import './ContactDealershipButton.scss';
import { Link } from "react-router-dom";



function ContactDealershipButton() {
  return (
    <div className='contactDealershipButton'>
        <Link 
            className='contactDealer'
            to="/contactdealership"
        >
            Email Dealership 
        </Link>
    </div>
  )
}

export default ContactDealershipButton