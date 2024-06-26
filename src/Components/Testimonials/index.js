import UsersReview from '../UsersReview'
import './index.css'

const Testimonials = () =>{
  return (
    <section className='card-sections  testomonial-section'>
      <div className='container'>
        <div className='even-columns testomonial-content'>
          <div>
            <h2>Our Client's Reviews & Testimonials</h2>
            <p>The majority of our users tell us that readable content distracts readers. The majority of our users tell us that readable</p>
            <div>
              <UsersReview/>
            </div>
          </div>
          
          <img className='' src='images/chevrolet.png' alt="img" />
          
        </div>
      </div>
</section>
  )
}

export default Testimonials