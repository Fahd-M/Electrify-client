import React from 'react';
import './EditButton.scss';
import { Link } from "react-router-dom";

function EditButton( { id }) {
  return (
    <div className='edit'>
        <Link 
            className='edit__button'
            to="/vehicles/edit/:id"
        >
            Edit Vehicle
        </Link>
    </div>
  )
}

export default EditButton