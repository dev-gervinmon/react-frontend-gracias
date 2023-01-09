import React from 'react'
import './Header.css';

import { images } from '../../constants';
import { SubHeading } from '../../components';

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The First Fine Dining Restaurant in Talisay City</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Alias quo laboriosam hic nulla veniam fugiat quaerat reiciendis maxime in dolorum esse,
          repellendus cum voluptate! Necessitatibus quas vitae nam voluptates neque.
        </p>
        <button type="button" className="custom__button">Explore Menu</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img"/>
      </div>

    </div>
  )
}

export default Header