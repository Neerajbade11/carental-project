import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { useState } from "react";
import ReservationForm from "../ReservationForm";

import "./index.css"


const Booking = () => {
    const [bookingOpen, setBooking] = useState(false)

    const openReservation = () => {
      setBooking(true)
      document.body.classList.add('no-scroll');
    }
    const closeReservation = () => {
      setBooking(false);
      document.body.classList.remove('no-scroll'); // Allow page scrolling
    };
     const inputValue = (e) => {
      console.log(e.target.value)
    }

    const handleSubmit = (event) =>{
      event.preventDefault(); 
      openReservation();
    }

   

    return(
      <>
        <section className='booking-section'>
            <div className='container  card-sections'>
                  <form onSubmit={handleSubmit} className='box-form booking-narrow-wrapper flex-wrap '>
                    <div className='box-form-item'>
                      <p>Where to Pick Up</p>
                      <div>
                        <label htmlFor="locationInput" ><IoLocationSharp size={25} className="input-icon" /></label> 
                        <input onKeyDown={inputValue}  id="locationInput" type="text"  placeholder='Entere Your location here' />
                      </div>
                    </div>
                    <div className='box-form-item'>
                      <p>Pick Up Date</p>
                      <div>
                        <label htmlFor="pickDate"  ><SlCalender className="input-icon"  size={25} /></label>
                        <input id="pickDate"   type="date" />
                      </div>
                    </div>
                    <div className='box-form-item'>
                      <p>Return Date</p>
                      <div>
                        <label htmlFor='dropDate'  ><SlCalender className="input-icon" size={25}  /></label>
                        <input id="dropDate" type="date" />
                      </div>
                    </div>
                  
                      <button   type="submit" className='submit-btn' onClick={openReservation}>search <AiOutlineArrowRight className="arrow-btn" size={25}/></button>
                  
                  </form>
                           
            </div>
           
          </section>
           
          {bookingOpen && (
            <div className="reservation-overlay" onClick={closeReservation}>
              <div className="reservation" onClick={(e) => e.stopPropagation()}>
                <ReservationForm />
               
              </div>
            </div>
          )}
           
      
      </>
    )

    
  }
export default Booking