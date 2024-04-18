import { GrLocation } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";

import { AiOutlineCar } from "react-icons/ai";
import './index.css'

const About = () => (
    <main className='bg'>
      <section className='about-section'>
            <div className='container'>
              <div>
                <div className='tabs-body'>
                  <p>How it Works</p>
                  <h2 className="secondary-header">Our Working Steps</h2>
                </div>
                <ul className='tabs-card-list'>
                  <div className='tabs-card-item'>
                    <div className="tab-icon">
                      <GrLocation size={50} className="icon" />
                    </div>
                    <h3>Choose Location</h3>
                    <p>Discover nearby attractions, receive real-time updates, connect with like-minded individuals, and explore effortlessly with our intuitive location app. Your journey, simplified and personalized, starts here.</p>
                  </div>
                   <div className='tabs-card-item'>
                    <div className="tab-icon" > 
                      <SlCalender size={50} className="icon" />
                    </div>
                    <h3>Pick-Up-Date</h3>
                    <p>Access 'Pickup Dates,' select desired start and end dates, confirm, and effortlessly schedule your tasks. Streamlined and user-friendly, our platform simplifies the process for your convenience.</p>
                  </div>
                  <div className='tabs-card-item'>
                    <div className="tab-icon">
                      <AiOutlineCar size={50} className="icon" />
                    </div>
                    <h3>Book Your Car</h3>
                    <p>Effortlessly book your car with us. Choose your vehicle, pick-up, and drop-off dates, confirm, and embark on a smooth journey. Your convenient car reservation starts now.</p>
                  </div>
                </ul>
              </div>
            </div>
    </section>
    </main>
)

export default About