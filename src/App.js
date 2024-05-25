import {Route, Routes} from 'react-router-dom'
import './App.css';

import Home from './Components/Home'
import Header from './Components/Header'
import Booking from './Components/Booking';
import About from './Components/About'
import Vehicles from './Components/Vehicles'
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';


const App = () =>  {
   
    return (
      <>
        <Header/>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path='/Booking' Component={Booking}/>
          <Route exact path="/About" Component={About} />
          <Route exact path="/Vehicles" Component={Vehicles} />
          <Route exact path="/Testimonials" Component={Testimonials} />
          <Route exact path='/Footer' Component={Footer} />
        </Routes>
       
        
      </>
    )
}

export default App;