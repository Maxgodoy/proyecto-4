import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="El nuevo sabor" />
      <h1 className="app__header-h1">El verdadero sabor de la comida</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Desde La Preciosa Italia, Llegamos A Chile Con Nuestros Mejores Platos, Para Que Tu Puedas Conocer Y Degustar La Alta Calidad De Los Platillos De La Casa De La Casa De Massimo Sapore</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;



