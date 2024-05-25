import { v4 as uuidv4 } from 'uuid';

const Cars = [
    {
      uniqueNo : uuidv4(),
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
      uniqueNo : uuidv4(),
      carImage: "images/honda.png",
      carName: "Honda Civic",
      carStartingPrice: 50,
      carModel: "2023",
      carSeats: 5,
      carDoors: 4,
      carAcHeater: "Yes"
    },
    {
      uniqueNo : uuidv4(),
      carImage: "images/ford.png",
      carName: "Ford Mustang",
      carStartingPrice: 100,
      carModel: "2022",
      carSeats: 4,
      carDoors: 2,
      carAcHeater: "Yes"
    },
    {
      uniqueNo : uuidv4(),
      carImage: "images/chevrolet.png",
      carName: "Chevrolet Silverado",
      carStartingPrice: 100,
      carModel: "2023",
      carSeats: 6,
      carDoors: 4,
      carAcHeater: "Yes"
    },
    {
      uniqueNo : uuidv4(),
      carImage: "images/bmw.png",
      carName: "BMW 3 Series",
      carStartingPrice: 90,
      carModel: "2022",
      carSeats: 5,
      carDoors: 4,
      carAcHeater: "Yes"
    },
    {
      uniqueNo : uuidv4(),
      carImage: "images/jeep.png",
      carName: "Jeep Wrangler",
      carStartingPrice: 120,
      carModel: "2023",
      carSeats: 4,
      carDoors: 4,
      carAcHeater: "Yes"
    }
  ];
  
  export default Cars