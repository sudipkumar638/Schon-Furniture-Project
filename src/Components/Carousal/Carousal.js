import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousal.scss"
import Card from '../Card/Card';


const Carousal = ({data}) => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    };

    return (
        <div>
            <div>
                <Slider {...settings}>


                    {data.map((item, ind) => {
                        return (<div key={ind} className='centerCards'>
                            <Card data={item}></Card>
                        </div>)
                    })}



                </Slider>
            </div>
        </div>
    )
}

export default Carousal