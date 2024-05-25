import Cars from '../../utils/car';
import CarItem from '../CarItem';
import {Link} from 'react-router-dom'
import './index.css'




const Vehicles = () => {
    return (
      <main className='bg'>
          
      <section className='cars-section'>
            <div className='container'>
              <p className='main-header'>Best Offer</p>
              <h2 className='header'>Our Featured Car</h2>
              <div className='cars-container'>
                <ul className='cars-card-list'>
                  {Cars.map(eachCar=> <CarItem key={eachCar.uniqueNo} eachCar={eachCar} />)}
                </ul>
              </div>
              <Link to="/vehicles"><button className='btn view-btn'> View All Cars</button></Link>
            </div>
    </section>
    
      </main>
    )
}

export default Vehicles