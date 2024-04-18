import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
    <header className='nav-section '>
    <div className='container'>
      <div className='nav-bar'>
        
        <Link to="/" className='logo'>CAR<span>ENTAL</span></Link>
        <nav>
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to="/About">ABOUT</Link></li>
            <li><Link to="/vehicles" >VEHICLE</Link></li>
            <li><Link to="/Testimonials">TESTIMONIALS</Link></li>
            <li><a href='#CONTACT'>CONTACT</a></li>
          </ul>
        </nav>
        <div>
          <button className='transp-btn'>
            Log in
          </button>
          <button className='btn'>
            Sign up
          </button>
        </div>       
          <i class="fa-solid fa-bars"></i>
      </div>
    </div>
</header>
)
export default Header