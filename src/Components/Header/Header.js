import React from 'react'
import "./header.scss"
const Header = () => {
    return (

        <div className='headerContainer'>
            <div className='leftSide'>
               <div  className='phoneNo'>
                  +1 (555) 333 22 11
               </div>
               <div className='email'>
                  info@schon.chairs
               </div>
            </div>
            <div className='rightSide'>
               <div>Order Track</div>
                <div>My Account</div>
                <div>Checkout</div>
               
            </div>
        </div>
    )
}

export default Header