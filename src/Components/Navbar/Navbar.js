import React from 'react'
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <div className='navbar'>
        <div className='logo'>
          <img src='https://htmlbeans.com/html/schon/images/mt-logo.png' />

        </div>
        <div className='menus'>
          <ul>
            <li className='mod'>HOME</li>
            <li className='mod'>PRODUCTS</li>
            <li className='mod'>PAGES</li>
            <li className='mod'>ABOUT</li>
            <li className='mod'>BLOG</li>
            <li className='mod'>CONTACT</li>
            <li className='hamburgur'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="20" viewBox="0 0 50 50">
              <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
            </svg></li>
            <li className='search'>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="20" viewBox="0 0 50 50">
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
              </svg>
            </li>
            <li>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEXElEQVR4nO2cW4hWVRiGHxU1wQsPUTiNF6YoGFQmCeb5whLHzPAqjTEwvAjUlFQyk2oulDyAYomnCxPMAyl4GJEYJM1D4pWliKIXohOKWv521mbiw/en3T/OMO4c17fG9cCC+ffes/53vbPWt457IJFIJBKJRCKRaEg5sB0oAPXAn8Al4BtgAdAnmda0eddlXGPpDrAFeCoZ2ZDtMmm3DLK0R9dOAeuA3/T5GjA2mfhfis02W7t66tpP+twD2JFp3q8lE//lpowpv4eBP5cYVaXrvwL9kol3+Uqm7JGJlvbqmjXvUtbr3tEGdx5R+iq2lXYc1xvpfTurh7ZnXgmg1yUW/7aqOd9UzWtq6DJLBu58iBpbFU8CdTK7fWgxsXJatfCF0EJiZYsMnBJaSKx8IAOXhhYSK+Nl4P7QQmKlV2aefBE4AVQDXwDLgfnAVM1ahmjg3TW0aE+0ycxi7jfd0Dz7W83BzfTFwEygEngVGAiUtfZe/ogMeRN4UQsNZsBsYBGwAdil587mNNyGS1fV6x/UnHy1ppUzgEnAaOA5jWc7EhFrVEgryP1gTfkZYKhq2zTgI2CFauNuhYRa4HYO03/X71ot/1p5rtB3TNN3DpUGq+XBmC7Ba1vwO9oCTwD9geHAROAdYCGwEtgM1AAnZdpfOQy35bqnCcBIpwsLXTTHf0mjhanq1JarNlZnarjp/zGU0G4S8ItqSmy8Lf3bQoq4LBFBmsD/ZKO0WygKxj6JmNCMZw8DhwJcb4wL0v48AflUIj5sxrOHNBR52NfvRXlm1b0dAamUEFtPjIlJmZX4oAyQEBvoxsRq6Z4XWshjGuze1s+xxMAfZKDN090srg6IJAZ21xTRBtAdcMBWGWjxMAYmSO8BnLBAgpYQB8uk92Oc/UX3RRIDj0uvreK4oLcE2X6x9xjYOdPp2c9uFlcLMtECtGdGS+d3OOOYhI3AN5943Qxb14yJuYcYeEA63Z0wmylhtkrtNQZ21NivzmOoGSUDbf/DK0Ok8Xsc8rjEFdSpeOR9afwcp9RKoO0Ze4yBxXOPb+CU/RJo+xDeYmAXbT3UeT4sv1QG2rkZb8yNIEbzlkR+iS9e1uF40zYOxwyUSFtrC41N0wZpWFXcnP8M53TSYaN6Z+mOzt5EsfV6xoFh9Wqy53Vq4lkifPNpcmghsbJQBlqTSeTgdRlog9ZEDvrIQDu1mshBW434zcR0pDcnx2XgsFQF87FBBtpByEQO3m3G4mqiCQbLwNrQJ59ipR1wTibaJk4iB2OAv7X+tkkLDVG9guCBSr1yUO8sRUVvYJVetKlzYF50BhYZJvF/AO/pP4FYmqNrecaNw1sgT7dUq0BW0MaW2/fmPOD+IPN0yxUVyGpI6Q5ame5dcZCnWwolhc3uoBULW3CQp1tqVCCLT6XM070aB3m6pSIT8OeqhpSpoMUdswoHebqmqomhRZWjPF1ToWZ1S6nmAdSSlsgzkUgkEolEglbAP5lTX8ghkRRPAAAAAElFTkSuQmCC" />
            </li>

          </ul>
        </div>
      </div>


    </div>
  )
}

export default Navbar