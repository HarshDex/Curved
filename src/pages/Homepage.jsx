import React from 'react'
import './Homepage.css'
import Navigation from '../components/Navigation'
import Page2 from '../components/Page2'
import ContactUs from '../components/ContactUs'
const Homepage = () => {
  return (
    <div className="home-page-container">
        <Navigation/>
        <div className="home-page-heading">
          <h1>Curved</h1>
          <div className="home-page-para">
            <h3>Gather</h3>
            <h4>New Body Energy</h4>
          </div>
          <div className="home-page-button">
            <button><img src="https://glustudios.in/wp-content/uploads/2022/05/contact-us-gif.gif" alt="" /></button>
          </div>
        </div>
        <Page2/>
        <ContactUs/>
        <div className="footer-home-page">
        © copyright 2024 Curved Corp limited
        </div>
    </div>
  )
}

export default Homepage