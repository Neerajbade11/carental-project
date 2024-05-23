import React from 'react'
import { FiX } from "react-icons/fi";
import './index.css'

const ReservationForm = () => {
  return (
        <div className='reservation-content'>
            <div className='reservation-model-title'>
                <h2>COMPLETE RESERVATION</h2>
                <FiX size={22} className='cancel-back-icon' />
            </div>
            <div className='reservation-model-message'>
                <h3> Upon completing this reservation enquiry, you will receive:</h3>
                <p>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
            </div>
            <div className='reservation-model-date-info'>
                <div className='reservation-wrapper'>
                    <div className='date-content'>
                            <h3>Location & Date</h3>
                            <form  className='date-form' onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <span className='input-item'>
                                        <label>Pick-Up Date
                                        <b>*</b>
                                        </label>
                                        <input type="date"  />
                                        <p className='required-message' >This field is required</p>
                                    </span>
                                    <span className='input-item' >
                                        <label>Drop-Off Date
                                        <b>*</b>
                                        </label>
                                        <input type="date"  />
                                        <p className='required-message' >This field is required</p>
                                    </span>
                                </div>
                        </form>
                    </div>
                    <div>
                        <h3>Car</h3>  
                    </div>
                </div>
            </div>
            <hr/>
            <div className='reservation-model-personal-info'>
                <h3>PERSONAL INFORMATION</h3>
                <form className='reservation-form' onSubmit={(event) => event.preventDefault()}>
                    <div className='input-item-wrapper'>
                        <span className='input-item'>
                            <label>First Name
                            <b>*</b>
                            </label>
                            <input type="text" placeholder="Enter your first name" />
                            <p className='required-message' >This field is required</p>
                        </span>
                        <span className='input-item'>
                            <label>Second Name
                            <b>*</b>
                            </label>
                            <input type="text" placeholder="Enter your first name" />
                            <p className='required-message'  >This field is required</p>
                        </span>
                        <span className='input-item'>
                            <label>Phone Number
                            <b>*</b>
                            </label>
                            <input type="tel" placeholder="Enter your Phone Number" />
                            <p className='required-message'  >This field is required</p>
                        </span>
                        <span className='input-item'>
                            <label>Age
                            <b>*</b>
                            </label>
                            <input type="number" placeholder="18" />
                            <p className='required-message'  >This field is required</p>
                        </span>
                    </div>
                    <div>
                        <span className='input-item'>
                            <label>Email
                            <b>*</b>
                            </label>
                            <input type="text" placeholder="Enter your email address" />
                            <p className='required-message'  >This field is required</p>
                        </span>
                        <span className='input-item'>
                            <label>Address
                            <b>*</b>
                            </label>
                            <input type="text" placeholder="Enter your street address" />
                            <p className='required-message'  >This field is required</p>
                        </span>
                    </div>
                    <div className='input-item-wrapper'>
                        <span className='input-item'>
                            <label>City
                            <b>*</b>
                            </label>
                            <input type="text" placeholder="Enter your City" />
                            <p className='required-message'  >This field is required</p>
                        </span>
                        <span className='input-item'>
                            <label>Zip Code
                            <b>*</b>
                            </label>
                            <input type="text" placeholder="Enter your Zip Code" />
                            <p className='required-message'  >This field is required</p>
                        </span>
                    </div>
                    <div className='check-box'>
                        <label htmlFor='checkId'>Please send me latest news and updates</label>
                        <input id='checkId' type='checkbox' value='' />
                    </div>
                    <div className='reserve-btn'>
                        <button type='submit' >Reserve Now</button>
                    </div>
                </form>
            </div>
        </div>
  
  )
}

export default ReservationForm
