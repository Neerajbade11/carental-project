import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import "./index.css"


const Booking = () => (
    <section className='booking section'>
            <div className='container card-sections'>
                <div className='flex-wrap'>
                  <div className='input-content'>
                    <p>Where to Pick Up</p>
                    <div>
                      <label><IoLocationSharp size={25} className="input-icon" /></label> 
                      <input type="location"  placeholder='Entere Your location here' />
                    </div>
                  </div>
                  <div className='input-content'>
                    <p>Pick Up Date</p>
                    <div>
                      <label><SlCalender className="input-icon"  size={25} /></label>
                      <input   type="DATE" />
                    </div>
                  </div>
                  <div className='input-content'>
                    <p>Return Date</p>
                    <div>
                     <label htmlFor='calender'><SlCalender className="input-icon" size={25}  /></label>
                      <input type="DATE" id='calender'  />
                    </div>
                  </div>
                  <div className='search-btn'>
                    <button className='btn input-btn'>search <AiOutlineArrowRight className="arrow-btn" size={25}/></button>
                  </div>
                </div>              
            </div>
          </section>
)
export default Booking