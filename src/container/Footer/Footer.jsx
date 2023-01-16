import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contáctanos</h1>
        <p className="p__opensans">Calle San Martin 1231, Santiago De Chile</p>
        <p className="p__opensans">Correo: MassimoSapore@gmail.com</p>
        <p className="p__opensans">+56 9 12345678</p>
      </div>

      <div className="app__footer-links_logo">
        <p className="p__opensans">&quot;"Donde la autenticidad italiana se une a la tradición culinaria".&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horario de trabajo</h1>
        <p className="p__opensans">Lunes-Viernes:</p>
        <p className="p__opensans">10:00 Am - 11:59 Pm</p>
        <p className="p__opensans">Sábado-Domingo:</p>
        <p className="p__opensans">10:00 Am - 01:00 Am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">®2023 Massimo Sapore. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;