import React from 'react'
import Slider from "react-slick";
import "./pauseonhover.scss"
import CarousalImagePart from '../CarousalImagePart/CarousalImagePart';
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
          <div className='pauseOnHoverContainer'>
          <CarousalImagePart smallHeading="FURNITURE DESIGNS IDEAS" bigheadingw="Upholstered fabric" bigheading="Counter stool" description="Consectetur adipisicing elit. Beatae accusamus, optio, repellendus inventore" imageLink="https://htmlbeans.com/html/schon/images/sliders/img10.jpg"></CarousalImagePart>

          </div>
          <div className='pauseOnHoverContainer'>
          <CarousalImagePart smallHeading="FURNITURE DESIGNS IDEAS" bigheadingw="Upholstered fabric" bigheading="Counter stool" description="Consectetur adipisicing elit. Beatae accusamus, optio, repellendus inventore" imageLink="https://htmlbeans.com/html/schon/images/sliders/img08.jpg"></CarousalImagePart>

          </div>
        

        </Slider>
      </div>
    </div>
  )
}

export default PauseOnHover