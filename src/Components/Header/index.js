import {Component} from 'react'
import {Link} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";

import './index.css'

class Header extends Component{
    state = {isOpen:false}

    mobilePreview = () =>{
        this.setState(prevState => ({
            isOpen : !prevState.isOpen
        }))
    }
    

    render(){
        const {isOpen} = this.state
        return(
            <header className='nav-section '>
                <div className='container'>
                    <div className='nav-bar'>
                        <Link to="/" className='logo'>CAR<span>ENTAL</span></Link>
                            <nav className='primary-nav'>
                                <ul>
                                    <li><Link to='/'>HOME</Link></li>
                                    <li><Link to="/About">ABOUT</Link></li>
                                    <li><Link to="/vehicles" >VEHICLE</Link></li>
                                    <li><Link to="/Testimonials">TESTIMONIALS</Link></li>
                                    <li><Link to="/Footer">CONTACT</Link></li>
                                </ul>
                            </nav>
                            <nav className={`mobile-nav ${isOpen && 'open-nav'}`}>
                                
                                <ul className='mobile-nav-list' >
                                    <li onClick={this.mobilePreview} ><Link to='/'>HOME</Link></li>
                                    <li onClick={this.mobilePreview}><Link to="/About">ABOUT</Link></li>
                                    <li onClick={this.mobilePreview}><Link to="/vehicles" >VEHICLE</Link></li>
                                    <li onClick={this.mobilePreview}><Link to="/Testimonials">TESTIMONIALS</Link></li>
                                    <li onClick={this.mobilePreview}><a href='#CONTACT'>CONTACT</a></li>
                                </ul>
                            
                            </nav>
                            <div className='nav-btn'>
                                <button className='transp-btn'>
                                    Log in
                                </button>
                                <button className='btn left-space-btn'>
                                    Sign up
                                </button>
                            </div>       
                            {isOpen ? <FiX  size={22}  onClick={this.mobilePreview} className='menu-icon cancel-icon' /> :
                            <GiHamburgerMenu onClick={this.mobilePreview} className='menu-icon' size={22} />  }
                    </div>
                </div>
            </header>
            )
        }
} 
export default Header