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
4
            </div>
            <div className='fifthpart'>
5
            </div>
            <div className='sixthpart'>
<PauseOnHover></PauseOnHover>
            </div>
            <div className='seventhpart'>
7
            </div>
           
          
        </div>
    )
}

export default FirstSection