import React from 'react'
import "../styles/Footer.scss"

const Footer = () => {
  return (
    <>

      <div className='footer'>
        <p align="center">Connect with Me</p>

        <div className="social">
          <div className="items">
            <button><a href="https://www.linkedin.com/in/oxsuyash/" target="blank">LinkedIn</a></button>
          </div>
          <div className="items">
            <button><a href="https://github.com/OxSuyash" target="blank">GitHub</a></button>
          </div>
          <div className="items">
          <button><a href="https://twitter.com/OxSuyash" target="blank">Twitter</a></button>
          </div>
          
        </div>
        <p align="center">SuyashKarne&#169;	All Rights Reserved</p>
      </div>
    </>
  )
}

export default Footer
