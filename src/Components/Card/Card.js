import React from 'react'
import "./card.scss"
const Card = ({data}) => {
  return (
    <div className='cardContainer'>
        <div className='cardPic'>
          <img src={data.image}></img>
        </div>
        <div className='cardTitle'>
            <h1>{data.productName}</h1>
        </div>
        <div className='cardPrice'>
            <h2>$ {data.price}</h2>
        </div>
        
    </div>
  )
}

export default Card