import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
  <header>
    <div className="container d-flex justify-content align-items">
      <div className="logo">
        <Link to={"/"}>
          <img src="assets/images/1.png" alt />   
        </Link> 
      </div>
      <nav>
        <ul className="d-flex">
          <li><Link to={'/'} className="home">HOME</Link></li>
          <li><Link to={'/About'}>ABOUT</Link></li>
          <li><Link to={'/Product'}>PRODUCTS</Link></li>
          <li><Link to={"/Contact"}>CONTACT</Link></li>
          <li><Link className="cart"><img src="assets/images/2.png" alt /></Link></li>
        </ul>
      </nav>
    </div>  
  </header>
</div>

  )
}

export default Header
