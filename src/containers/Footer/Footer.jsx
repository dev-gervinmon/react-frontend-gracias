import React from 'react'
import './Footer.css';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">Talisay City, Negros Occidental</p>
          <p className="p__opensans">435-0000</p>
          <p className="p__opensans">+639000000000</p>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.graciasGolden} alt="footer_logo" />
          <p className="p__opensans">"The First Fine Dining Restaurant In Talisay City"</p>
          <img src={images.spoon} alt="spoon" className="spoon__img" style={{ marginTop: "15px"}} />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
            <p className="p__opensans">Monday-Friday</p>
            <p className="p__opensans">10:00 AM - 10:00 PM</p>
            <p className="p__opensans">Saturday-Sunday</p>
            <p className="p__opensans">10:00 AM - 8:00 PM</p>
        </div>
        
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">2023 Gracia's. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer