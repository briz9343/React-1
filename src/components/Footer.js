import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="bgcolor wow animate__animated animate__slideInUp" id="contact">
          <div className="container d-flex">
            <div className="section  wow animate__animated animate__slideInLeft">
              <h2>MARIELA</h2>
              <p className="fo-detail">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className="section">
              <h2>INFORMATION</h2>
              <p>FAQs</p>
              <p>Privacy</p>
              <p>Terms condition</p>
            </div>
            <div className="section">
              <h2>LINKS</h2>
              <p>Home</p>
              <p>About</p>
              <p>Services</p>
              <p>Work</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
            <div className="section  wow animate__animated animate__slideInR">
              <h2>HAVE A QUESTION ?</h2>
              <div className="place d-flex">
                <i className="fa-solid fa-location-dot" /><p> 203 Fake St. Mountain View, San Francisco, California, USA</p>
              </div>
              <div className="place d-flex">
                <i className="fa-solid fa-phone" /> <p>+2 392 3929210</p>
              </div>
              <div className="place d-flex">
                <i className="fa-solid fa-envelope" /><p>info@yourdomain.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer
