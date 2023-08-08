import React from 'react'
import "./threeblockbanner.scss"
const ThreeBlockBanner = () => {
  return (
    <div className='bannerContainer'>
        <div className='leftpart'>
          <div className='bannerText'>
               <h2>Wall Decor</h2>
               <h1>Clocks</h1>
          </div>
          <img src='https://htmlbeans.com/html/schon/images/banner/img20.jpg'></img>
        </div>
         <div className='middlepart'>
             <div className='bannerText'>
             <h2>Coffee Tables</h2>
               <h1>S.O.S. BLOCKS</h1>

          </div>
         <img src='https://htmlbeans.com/html/schon/images/banner/img21.jpg'></img>
        
        </div>
         
         <div className='lastpart'>
         <div className='bannerText'>
              <h2>Floor Lamps</h2>
               <h1>ROCKING LAMP</h1>
          </div>
         <img src='https://htmlbeans.com/html/schon/images/banner/img19.jpg'></img>
        </div>
    </div>
  )
}

export default ThreeBlockBanner