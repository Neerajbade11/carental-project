import {Route, Routes} from 'react-router-dom'
import './App.css';

import Home from './Components/Home'
import Header from './Components/Header'
import About from './Components/About'
import Vehicles from './Components/Vehicles'
import Testimonials from './Components/Testimonials';


const App = () =>  {
   
    return (
      <>
        <Header/>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/About" Component={About} />
          <Route exact path="/Vehicles" Component={Vehicles} />
          <Route exact path="/Testimonials" Component={Testimonials} />
        </Routes>
       
        
      </>
    )
}

export default App;