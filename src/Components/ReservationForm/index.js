import React, { useState } from 'react';
import Cars from '../../utils/car';
import { FiX } from "react-icons/fi";
import './index.css';

const ReservationForm = ({ toggleReservation }) => {
  const [formData, setFormData] = useState({
    pickUpLocation: '',
    pickUpDate: '',
    returnDate: '',
    firstName: '',
    secondName: '',
    phoneNumber: '',
    age: '',
    email: '',
    address: '',
    city: '',
    zipCode: ''
  });

  const [formErrors, setFormErrors] = useState({});
   
  const randomIndex = Math.floor(Math.random() * Cars.length);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    const checkBoxChecked = document.getElementById('checkId').checked;
    e.preventDefault();
    const errors = validateForm();
    if (checkBoxChecked && Object.keys(errors).length === 0) {
       
        localStorage.setItem('reservationFormData', JSON.stringify(formData));
        alert('Your Ride Starts Soon!');
        toggleReservation()
      } else {
        if (!checkBoxChecked) {
          alert('Please agree to receive news and updates.');
        }
        setFormErrors(errors);
      }
  };

  const validateForm = () => {
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        errors[key] = 'This field is required';
      }
    });
    return errors;
  };

  return (
    <div className='reservation-content'>
      <div className='reservation-model-title'>
        <h2>COMPLETE RESERVATION</h2>
        <FiX onClick={toggleReservation} size={22} className='cancel-back-icon' />
      </div>
      <div className='reservation-model-message'>
        <h3>Upon completing this reservation enquiry, you will receive:</h3>
        <p>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
      </div>
      <div className='reservation-model-date-info'>
        <div className='reservation-wrapper'>
          <div className='date-content'>
            <h3>Location & Date</h3>
            <form className='date-form' onSubmit={handleSubmit}>
              <div>
                <span className='input-item'>
                  <label>Where to Pick Up <b>*</b></label>
                  <input
                    name="pickUpLocation"
                    placeholder='Where to pick up'
                    type="text"
                    value={formData.pickUpLocation}
                    onChange={handleInputChange}
              
                  />
                  {formErrors.pickUpLocation && <p className='required-message'>{formErrors.pickUpLocation}</p>}
                </span>
                <span className='input-item'>
                  <label>Pick Up Date <b>*</b></label>
                  <input
                    name="pickUpDate"
                    type="date"
                    value={formData.pickUpDate}
                    onChange={handleInputChange}
              
                  />
                  {formErrors.pickUpDate && <p className='required-message'>{formErrors.pickUpDate}</p>}
                </span>
                <span className='input-item'>
                  <label>Return Date <b>*</b></label>
                  <input
                    name="returnDate"
                    type="date"
                    value={formData.returnDate}
                    onChange={handleInputChange}
                 
                  />
                  {formErrors.returnDate && <p className='required-message'>{formErrors.returnDate}</p>}
                </span>
              </div>
            </form>
          </div>
          <div className='car-container'>
            <h3>Car-{Cars[randomIndex].carName}</h3>
            <div className="car-images-container">
                <img className='car-img' src={Cars[randomIndex].carImage} alt='car img' />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='reservation-model-personal-info'>
        <h3>PERSONAL INFORMATION</h3>
        <form className='reservation-form' onSubmit={handleSubmit}>
          <div className='input-item-wrapper'>
            <span className='input-item'>
              <label>First Name <b>*</b></label>
              <input
                name="firstName"
                type="text"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleInputChange}
             
              />
              {formErrors.firstName && <p className='required-message'>{formErrors.firstName}</p>}
            </span>
            <span className='input-item'>
              <label>Second Name <b>*</b></label>
              <input
                name="secondName"
                type="text"
                placeholder="Enter your second name"
                value={formData.secondName}
                onChange={handleInputChange}
        
              />
              {formErrors.secondName && <p className='required-message'>{formErrors.secondName}</p>}
            </span>
            <span className='input-item'>
              <label>Phone Number <b>*</b></label>
              <input
                name="phoneNumber"
                type="tel"
                placeholder="Enter your Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
             
              />
              {formErrors.phoneNumber && <p className='required-message'>{formErrors.phoneNumber}</p>}
            </span>
            <span className='input-item'>
              <label>Age <b>*</b></label>
              <input
                name="age"
                type="number"
                placeholder="18"
                value={formData.age}
                onChange={handleInputChange}
             
              />
              {formErrors.age && <p className='required-message'>{formErrors.age}</p>}
            </span>
          </div>
          <div>
            <span className='input-item'>
              <label>Email <b>*</b></label>
              <input
                name="email"
                type="text"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
              
              />
              {formErrors.email && <p className='required-message'>{formErrors.email}</p>}
            </span>
            <span className='input-item'>
              <label>Address <b>*</b></label>
              <input
                name="address"
                type="text"
                placeholder="Enter your street address"
                value={formData.address}
                onChange={handleInputChange}
                
              />
              {formErrors.address && <p className='required-message'>{formErrors.address}</p>}
            </span>
          </div>
          <div className='input-item-wrapper'>
            <span className='input-item'>
              <label>City <b>*</b></label>
              <input
                name="city"
                type="text"
                placeholder="Enter your City"
                value={formData.city}
                onChange={handleInputChange}
                
              />
              {formErrors.city && <p className='required-message'>{formErrors.city}</p>}
            </span>
            <span className='input-item'>
              <label>Zip Code <b>*</b></label>
              <input
                name="zipCode"
                type="text"
                placeholder="Enter your Zip Code"
                value={formData.zipCode}
                onChange={handleInputChange}
                
              />
              {formErrors.zipCode && <p className='required-message'>{formErrors.zipCode}</p>}
            </span>
          </div>
          <div className='check-box'>
            <label htmlFor='checkId'>Please send me latest news and updates</label>
            <input id='checkId' type='checkbox' value='' />
          </div>
          <div className='reserve-btn'>
            <button type='submit'>Reserve Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReservationForm;
