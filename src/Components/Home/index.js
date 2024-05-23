import {Component} from 'react'
import Booking from '../Booking'
import Brands from '../Brands'
import About from '../About'
import Model from '../Model'
import Vehicles from '../Vehicles'
import Testimonials from '../Testimonials'
import Footer from '../Footer'

import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import './index.css'



class Home extends Component {
  state= {isVisible:false}
  
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  

  handleScroll = () =>{
    const scrollTop = window.pageYOffset;
     
    if (scrollTop > 200){
      this.setState({isVisible:true})
    }else{
      this.setState({isVisible:false})
    }
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  render(){
    const {isVisible} = this.state
    return (
      <main className='bg'>        
        <section className='home-section ' >
            <div className='container'>
              <div className='arrow-container'>
                <MdOutlineKeyboardArrowUp size={45} onClick={this.scrollToTop} className={`arrow-button ${isVisible && 'arrow-up'}`} />
              </div>
              <div className='home-wrapper'>
                <div className='home-content'>
                  <h1>WE RENT <br/> THE HIGHEST CALIBER <br/> AUTOMOBILES</h1>
                  <p>Experience unrivaled luxury with our elite car rentals <br/>  where style meets performance for an extraordinary journey on the road.</p>
                  <div>
                    <button className='btn hero-btn'>Rent Now</button>
                    <button className='transp-btn hero-transp-btn left-space-btn'>Learn More</button>
                  </div>
                </div>
                
                  <img src='images/car.png' className='home-car-img' alt='home-img' />
                
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
  }
}

export default Home