import { FiSettings } from "react-icons/fi";
import { FaRegHandshake } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import './index.css'

const Model = ( ) => (
  <section className='model-section'>
    <div className="wrapper">
      
          <div>
            <img  src='images/car2.png' alt='car2-img' />
          </div>
        <div className='container'>
          <div className="rental-experience-content"> 
            <h2>Feel The Best Experience With Our Rental Deals</h2>
            <ul>
                <li className="rental-experience-list">
                  <FaRegHandshake className="icon" />
                  <div>
                    <h3>Deals for every budget</h3>
                    <p>Looking for a car rental for your next trip?
                      <br/>Here are Some tips to help you find
                    </p>
                  </div>
                </li>
                <li className="rental-experience-list">
                  <AiOutlineDollar className="icon" />
                  <div>
                    <h3>Best price guaranted</h3>
                    <p>Looking for a car rental for your next trip?
                      <br/>Here are Some tips to help you find
                    </p>
                  </div>
                </li>
                <li className="rental-experience-list">
                  <FiSettings className="icon" />
                  <div>
                    <h3>24/7 Support</h3>
                    <p>Looking for a car rental for your next trip?
                      <br/>Here are Some tips to help you find
                    </p>
                  </div>
                </li>
            </ul>
          </div>
        </div>
    </div>
</section>

)

export default Model