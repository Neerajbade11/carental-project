
import CarItem from '../CarItem';
import {Link} from 'react-router-dom'
import './index.css'

const cars = [
    {
      carImage: "images/toyota.png",
      carName: "Toyota Land Cruiser",
      carStartingPrice: 70,
      carModel: "2022",
      carSeats: 5,
      carDoors: 4,
      carAcHeater: "Yes",
      reviews: "Great customer service and affordable prices. Highly recommend!",
      designation: "Happy Customer"
  
    },
    {
      carImage: "images/honda.png",
      carName: "Honda Civic",
      carStartingPrice: 50,
      carModel: "2023",
      carSeats: 5,
      carDoors: 4,
      carAcHeater: "Yes"
    },
    {
      carImage: "images/ford.png",
      carName: "Ford Mustang",
      carStartingPrice: 100,
      carModel: "2022",
      carSeats: 4,
      carDoors: 2,
      carAcHeater: "Yes"
    },
    {
      carImage: "images/chevrolet.png",
      carName: "Chevrolet Silverado",
      carStartingPrice: 100,
      carModel: "2023",
      carSeats: 6,
      carDoors: 4,
      carAcHeater: "Yes"
    },
    {
      carImage: "images/bmw.png",
      carName: "BMW 3 Series",
      carStartingPrice: 90,
      carModel: "2022",
      carSeats: 5,
      carDoors: 4,
      carAcHeater: "Yes"
    },
    {
      carImage: "images/jeep.png",
      carName: "Jeep Wrangler",
      carStartingPrice: 120,
      carModel: "2023",
      carSeats: 4,
      carDoors: 4,
      carAcHeater: "Yes"
    }
  ];
  


const Vehicles = () => {
    return (
      <main className='bg'>
          
      <section className='cars-section'>
            <div className='container'>
              <p className='main-header'>Best Offer</p>
              <h2 className='header'>Our Featured Car</h2>
              <div className='cars-container'>
                <ul className='cars-card-list'>
                  {cars.map(eachCar=> <CarItem key={eachCar.carName} eachCar={eachCar} />)}
                </ul>
              </div>
              <Link to="/vehicles"><button className='btn view-btn'> View All Cars</button></Link>
            </div>
    </section>
    
      </main>
    )
}

export default Vehicles