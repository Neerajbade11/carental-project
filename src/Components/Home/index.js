import Booking from '../Booking'
import Brands from '../Brands'
import About from '../About'
import Model from '../Model'
import Vehicles from '../Vehicles'
import Testimonials from '../Testimonials'
import Footer from '../Footer'


import './index.css'


const Home = () => (
      <main className='bg'>
        <section className='home-section ' >
            <div className='container'>
              <div className='even-columns  home-wrapper'>
                <div className='home-content'>
                  <h1>WE RENT THE HIGHEST CALIBER AUTOMOBILES</h1>
                  <p>Experience unrivaled luxury with our elite car rentals – where style meets performance for an extraordinary journey on the road.</p>
                  <div>
                    <button className='btn hero-btn'>Rent Now</button>
                    <button className='transp-btn hero-transp-btn'>Learn More</button>
                  </div>
                </div>
                <div className='home-img'> 
                  <img src='images/car.png' alt='home-img' />
                </div>
              </div>
            </div>
        </section>
        <Booking/>
        <Brands/>
        <About/>
        <Model/>
        <Vehicles/>
        <Testimonials/>
        <Footer/>
      </main>
)

export default Home