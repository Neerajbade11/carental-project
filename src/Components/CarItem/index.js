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
                        <li><i class="fa-solid fa-car"></i>
                        <p>{carModel}</p></li>
                        <li><i class="fa-regular fa-user"></i>
                        <p>{carSeats} Seats</p></li>
                        <li><i class="fa-solid fa-door-open"></i>
                        <p>{carDoors} Doors</p></li>
                        <li><i class="fa-regular fa-snowflake"></i>
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