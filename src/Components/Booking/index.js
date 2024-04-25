import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import "./index.css"


const Booking = () => (
    <section className='booking-section'>
            <div className='container  card-sections'>
                  <form className='box-form booking-narrow-wrapper flex-wrap ' onSubmit={(event)=>event.preventDefault}>
                    <div className='box-form-item'>
                      <p>Where to Pick Up</p>
                      <div>
                        <label htmlFor="locationInput" ><IoLocationSharp size={25} className="input-icon" /></label> 
                        <input id="locationInput" type="location"  placeholder='Entere Your location here' />
                      </div>
                    </div>
                    <div className='box-form-item'>
                      <p>Pick Up Date</p>
                      <div>
                        <label htmlFor="pickUpDate" ><SlCalender className="input-icon"  size={25} /></label>
                        <input id="pickUpDate"   type="DATE" />
                      </div>
                    </div>
                    <div className='box-form-item'>
                      <p>Return Date</p>
                      <div>
                        <label htmlFor='dropDate' ><SlCalender className="input-icon" size={25}  /></label>
                        <input id="dropDate" type="DATE" />
                      </div>
                    </div>
                  
                      <button className='submit-btn'>search <AiOutlineArrowRight className="arrow-btn" size={25}/></button>
                  
                  </form>
                           
            </div>
          </section>
)
export default Booking