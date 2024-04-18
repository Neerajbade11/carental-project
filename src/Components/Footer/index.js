import { FaFacebookF } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { RiLinkedinFill } from "react-icons/ri";

import './index.css'

const Footer = () => {
  return (
    <footer className='footer'>
    <div className='container footer-content'>
      <div >
        <h3>CARENTAL</h3>
        <ul className="address-list">
          <li><p>Karnol Nokin Link</p></li>
          <li><p>442 Belle Street, California</p></li>
          <li><p>support@mail.com</p></li>
        </ul>
        <h3>(717) 342 759 774</h3>
      </div>
      <div>
        <h3>Our Product</h3>
        <ul className="products-list">
          <li><a href='#Home'>Driver</a></li>
          <li><a href='#Home'>Car</a></li> 
          <li><a href='#Home'>career</a></li> 
          <li><a href='#Home'>Features</a></li>  
        </ul>
      </div>
      <div>
        <h3>Resources</h3>
        <ul className="resources-list">
          <li><a href='#Home'>Community</a></li>
          <li><a href='#Home'>Download</a></li> 
          <li><a href='#Home'>FAQ</a></li> 
          <li><a href='#Home'>Guides</a></li> 
          <li><a href='#Home'>Patner Network</a></li>  
        </ul>
      </div>
      <div>
        <h3>About Us</h3>
        <ul className="about-list">
          <li><a href='#Home'>Why choose Us</a></li>
          <li><a href='#Home'>Our story</a></li> 
          <li><a href='#Home'>Advertise</a></li> 
          <li><a href='#Home'>Guides</a></li>  
        </ul>
      </div>
      <div>
        <h3>Get In Touch</h3>
        
          <ul className='icons'>
            <li className='icons-item'><FaFacebookF size={30} /></li>
            <li className='icons-item'><FiInstagram size={30} /></li>
            <li className='icons-item'><RiLinkedinFill size={30} /></li>
          </ul>
          <div>
            <div  className="badge">
              <img className="badge-item" src="images/playstore.png" alt="playstore badge" />
              <img className="badge-item" src="svg/apple.svg" alt="apple badge" /> 
            </div>
          </div>
      </div>
    </div>
    <hr/>
    <div className='copy-right'>
      <p>Privacy Policy | Term & Condition | Copyright 2022 Fluxtree. All right reserved</p>
    </div>
  </footer>
  )
}
export default Footer