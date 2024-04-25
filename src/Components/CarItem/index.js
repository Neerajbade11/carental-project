import { FaCar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";
import { LuThermometerSnowflake } from "react-icons/lu";
import './index.css'

const Features = props =>{
    const {eachCar} = props
    const {carImage, carName, carStartingPrice, carModel, carSeats, carDoors} = eachCar

    return (
        <li className='car-card-item'>
                <div className='container'>
                    <div>
                        <img src={carImage} alt={carName} className='car-img' />
                    </div>
                    <h2 className='car-name'>- {carName} -</h2>
                </div>
                <div className='narrow-wrapper'>
                    <h2 className='car-price'>Starting at ${carStartingPrice} / Day</h2>
                </div>
                <div className='container'>
                    <ul className='car-details'>
                        <li><FaCar />
                        <p>{carModel}</p></li>
                        <li><FaUser />
                        <p>{carSeats} Seats</p></li>
                        <li><FaDoorOpen />
                        <p>{carDoors} Doors</p></li>
                        <li><LuThermometerSnowflake />
                        <p>AC/Heater</p></li>
                    </ul>
                </div>
               
            
            <div className='btn-container'>
                    <button>Details</button>
                    <button>Book</button>
                </div>
        </li>
    )
}

export default Features