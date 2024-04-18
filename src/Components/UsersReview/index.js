import { Component } from 'react'
import { BiSolidQuoteLeft } from "react-icons/bi";
import { BiSolidQuoteRight } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import './index.css'

const testimonials =  [
    {
      "id": 1,
      "name": "John Smith",
      "profile": 'images/profile.jpg',
      "rating": 4.9,
      "comment": "I rented a car for a weekend getaway and the service was excellent. The car was clean and in great condition. Will definitely be using this service again!"
    },
    {
      "id": 2,
      "name": "Sarah Johnson",
      "profile": 'images/profilefemale1.jpg',
      "rating": 4,
      "comment": "The process of renting a car was quick and easy. The staff was friendly and helpful. Overall, a great experience."
    },
    {
      "id": 3,
      "name": "Michael Brown",
      "profile": 'images/profile1.jpg',
      "rating": 5,
      "comment": "I needed a car last minute and was able to book one online easily. The car was reliable and comfortable. Highly recommend this service."
    },
    {
      "id": 4,
      "name": "Emily Davis",
      "profile": 'images/profile2.jpg',
      "rating": 4,
      "comment": "I rented a car for a business trip and was impressed with the selection of cars available. The customer service was top-notch. Will be using this service again."
    },
    {
      "id": 5,
      "name": "David Wilson",
      "profile": 'images/profile3.jpg',
      "rating": 4,
      "comment": "I had a great experience renting a car for a family vacation. The car was spacious and comfortable. Will definitely be a repeat customer."
    },
  
    {
      "id": 6,
      "name": "John Doe",
      "profile": 'images/profile4.jpg',
      "comment": "I had a great experience renting a car from this service. The staff was friendly and helpful, and the car was in excellent condition. I will definitely be using this service again in the future.",
      "rating": 4.2
  },
  {
      "id": 7,
      "name": "Jane Smith",
      "profile": 'images/profilefemale2.jpg',
      "comment": "I was very impressed with the selection of cars available for rent. The prices were reasonable and the customer service was top-notch. I will be recommending this service to all of my friends and family.",
      "rating": 4.5
  },
  {
      "id": 8,
      "name": "Mike Johnson",
      "profile": 'images/profile5.jpg',
      "comment": "Renting a car from this service was a breeze. The online booking process was quick and easy, and the car was ready for me when I arrived. I had a fantastic road trip thanks to this service.",
      "rating": 4
  },
  {
      "id": 9,
      "name": "Sarah Williams",
      "profile": 'images/profile6.jpg',
      "comment": "I rented a car for a weekend getaway and was very happy with the service. The car was clean and well-maintained, and the staff was very helpful. I will definitely be using this service again in the future.",
      "rating": 4.2
  }
  ]

class UsersReview extends Component{
  state = {index:0}

 
    
  ratingStar = rating => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<BsStarFill key={i} className='rating-item' />);
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<BsStarHalf key="half" className='rating-item' />);
    }

    // Add remaining empty stars to make a total of 5 stars
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<BsStarFill key={`empty-${i}`} className='rating-item empty' />);
    }

    return stars;
  }
    
  nextUser = () => {
    this.setState(prevState => ({
      index: (prevState.index + 1) % testimonials.length
    }));
  }

  prevUser = () => {
    if (this.state.index > 0) {
        this.setState(prevState => ({
            index: prevState.index - 1
        }));
    }
}


  render(){
      const { index } = this.state;
      const user = testimonials[index];
      const {name, rating, comment} = user;

      return(
          <div>    
              <div className='quote'> 
                  <div className='quote-icon'>
                    <BiSolidQuoteLeft  size={40}  />
                  </div>
                  <p className='comment'>{comment}</p> 
                  <div className='quote-icon'>
                    <BiSolidQuoteRight   size={40}/>
                  </div>                 
              </div>
              <ul className='rating'>
                  {this.ratingStar(rating)}
              </ul>
              <div className='profile-card'>
                  
                  <div className='profile-item'>
                      <div>
                        <img className='profile-img' src={user.profile} alt="profile" />
                      </div>
                      <p>{name}</p>   
                  </div>
                  <div className='arrow-item'>
                      <BsArrowLeft size={25} onClick={this.prevUser}/>
                      <BsArrowRight size={25} onClick={this.nextUser} />
                  </div>
              </div>
          </div>
      )
  }
}

export default UsersReview