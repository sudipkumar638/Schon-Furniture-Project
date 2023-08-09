import React from 'react'
import "./carousalimagepart.scss"
const CarousalImagePart = ({smallHeading,bigheadingw,bigheading,description,imageLink}) => {
    return (
        <div className='carousalImgContainer'>
            <div className='carousalText'>
                <div className='smallHeading'>
                   {smallHeading}
                </div>
                <div className='bigHeadingweighted'>
                {bigheadingw}
                </div>
                <div className='bigHeading'>
                    {bigheading}
                </div>
                <div className='description'>
                    {description}
                </div>
            </div>


            <div className='imageContainer'>
                <img className='realImage' src={imageLink} alt='CarousalImage'></img>
            </div>

        </div>
    )
}


export default CarousalImagePart