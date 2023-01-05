import React from 'react'

const Contact = () => {
  return (
    <div>
  <section>
    <div className="adddetails space">
      <div className="container d-flex justify-content">
        <div className="mail">
          <h3>EMAIL</h3>
          <p>support@website.com</p>
          <h3>PHONE</h3>
          <p>800-123-456</p>
          <h3>ADDRESS</h3>
          <p>23 Evergreen Street,
            San Francisco, California
            USA</p>
        </div>
        <div className="talk">
          <h3>ADDRESS</h3>
          <p className="drop">Drop us your message and I'll get back to you as soon as possible.</p>
          <form action>
            <input type="text" placeholder="NAME" id className="boxs1" required />
            <input type="mail" placeholder="EMAIL" className="boxs1" required />
            <input type="phone" placeholder="Phone" className="boxs1" required />
            <input type="text" placeholder="Company" className="boxs1" required />
            <textarea name className="boxs2" id cols={82} rows={10} placeholder="Enter Your Message" defaultValue={""} />
            <button className="Appointment">Let's Talk</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="newsletter wow animate__animated animate__slideInUp" style={{animationDuration: '2s'}}>
      <h3>NEW SLETTER</h3>
      <p>Get promotions &amp; updates!</p>
      <form action className="subscribe d-flex align-items space wow animate__animated animate__slideInUp" style={{animationDuration: '2.8s'}}>
        <input type="text" placeholder="NAME" id className="boxs1" required />
        <input type="mail" placeholder="EMAIL" className="boxs1 boxs2" required />
        <button className="btn">Subscribe</button>
      </form>    
    </div>
  </section>
  <section>
    <div className="shipping wow animate__animated animate__slideInUp">
      <div className="container d-flex justify-content">
        <div className="ship1 wow animate__animated animate__slideInUp" style={{animationDuration: '2.5s'}}>
          <div className="perk">
            <div className="perk-icon">
              <img src="assets/images/asset 21.svg" alt />
            </div>
          </div>   
          <div className="shipde">
            <h3>Safe shopping</h3>
            <p>Buy with confidence</p>
          </div>
        </div>
        <div className="ship1 wow animate__animated animate__slideInUp" style={{animationDuration: '3s'}}>
          <div className="perk">
            <div className="perk-icon">
              <img src="assets/images/asset 22.svg" alt />
            </div>
          </div>   
          <div className="shipde">
            <h3>Fast shipping</h3>
            <p>Get your product fast</p>
          </div>
        </div>
        <div className="ship1 wow animate__animated animate__slideInUp" style={{animationDuration: '3.5s'}}>
          <div className="perk">
            <div className="perk-icon">
              <img src="assets/images/asset 23.svg" alt />
            </div>
          </div>   
          <div className="shipde">
            <h3>Satisfaction guarantee</h3>
            <p>Or get your money back</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


  )
}

export default Contact
