import React from 'react'
import Slider from "react-slick";
import "./pauseonhover.scss"
const PauseOnHover = () => {

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows:false
      };
  return (
    <div>
         <div>
      
        <Slider {...settings}>
          <div className='bye'>
            <img className='hello' src='https://htmlbeans.com/html/schon/images/sliders/img10.jpg'></img>
          </div>
          <div className='bye'>
            <img className='hello' src='https://htmlbeans.com/html/schon/images/sliders/img10.jpg'></img>
          </div>
          <div className='bye'>
            <img className='hello' src='https://htmlbeans.com/html/schon/images/sliders/img10.jpg'></img>
          </div>
          <div className='bye'>
            <img className='hello' src='https://htmlbeans.com/html/schon/images/sliders/img10.jpg'></img>
          </div>
          <div className='bye'>
            <img className='hello' src='https://htmlbeans.com/html/schon/images/sliders/img10.jpg'></img>
          </div>
          <div className='bye'>
            <img className='hello' src='https://htmlbeans.com/html/schon/images/sliders/img10.jpg'></img>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default PauseOnHover