import React from 'react'
import "./firstsection.scss";
import PauseOnHover from '../Carousal/PauseOnHover';
const FirstSection = () => {
    return (
        <div className='firstSectionContainer'>
            <div className='firstpart'>
               <div className='textsection'>
                <p className='banner'>FURNITURE DESIGN IDEAS</p>
                 <h1>New Collections</h1>
                 <p>Consectetur adipisicing elit. Beatae accusamus, optio, repellendus inventore</p>
                 <p className='price'>$ 79.00</p>
               </div>
            </div>
            <div className='secondpart'>
                 <div className='textsection'>
                    <div className='uppersection'>
                    <p>SOFAS & ARMCHAIRS</p>
                       <h2>3 Seater leather Sofa</h2>
                    </div>
                    <div className='lowersection'>
                       SHOP NOW
                    </div>

                    <div className='bluecircle'>
                        <div> 
                        $ 499.00
                         
                        </div>
                      
                    </div>
                     
                 </div>
            </div>
            <div className='thirdpart'>
                <div className='textsection'>
                <div className='uppersection'>
                    
                       <h2>ACRYLIC FABRIC BEAN BAG</h2>
                    </div>
                    
                    <div className='lowersection'>
                    <div className='price'>$99.00</div>
                    <div className='shopbutton'>SHOP NOW</div>
                       
                    </div>
                </div>
            </div>
            <div className='forthpart'>
            <div className='thirdTextSection'>
                 <h2>CHAIR WITH ARMRESTS</h2>
                 <div className='thirdprice'>
                     $99.00
                     <div className='hurry'>Hurry Up!</div>
                 </div>
            </div>
            </div>
            <div className='fifthpart'>
             <div className='fifthTextSection'>
                <div className='fifthheading'>
                <h2>Chairs</h2>
                <h1>ZIO DINING CHAIR</h1>
                </div>
                <div className='shopnow'>
                   Shop Now
                </div>
              

             </div>
            </div>
            <div className='sixthpart'>
<PauseOnHover></PauseOnHover>
            </div>
            <div className='seventhpart'>
              <div className='seventhTextSection'>
              <div className='seventhheading'>
                <h2>Accessories / Lighting</h2>
                <h1>TOTEM FLOOR LAMP</h1>
               </div>
                <div className='shopnow'>
                   Shop Now
                </div>
              </div>
            </div>
           
          
        </div>
    )
}

export default FirstSection