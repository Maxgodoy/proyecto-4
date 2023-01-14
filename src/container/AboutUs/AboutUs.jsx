import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__sobrenosotros app__bg flex__center section__padding' id='sobre'>
    
   <div className='app__sobrenosotros-content flex__center'>
    <div className='app__sobrenosotros-content_sobre'>
      <h1 className='headtext__cormorant'>Sobre nosotros</h1>
      <img src={images.spoon} alt="imagen cuchara"  className='spoon__img'/>
      <p className='p__opensans'>Somos una compañía de restaurantes italianos con sede en Italia. Ofrecemos una amplia variedad de platos tradicionales italianos, incluyendo pasta fresca hecha a mano, pizza casera y carnes y pescados preparados al estilo italiano. Además, nuestra carta incluye una selección de vinos italianos de alta calidad para complementar cualquier comida. Tenemos un ambiente acogedor, con un servicio amable y atento. Estamos comprometidos a proporcionar una experiencia culinaria auténtica y memorable a cada uno de nuestros clientes.</p>
      <button type='button' className='custom__button'>Conócenos</button>
    </div>

    <div className='app__sobrenosotros-content_knife flex__center'>
      <img src={images.knife} alt="cuchillo" />
    </div>

    <div className='app__sobrenosotros-content_historia'>
      <h1 className='headtext__cormorant'>Nuestra historia</h1>
      <img src={images.spoon} alt="imagen cuchara"  className='spoon__img'/>
      <p className='p__opensans'>Nuestro restaurante italiano tiene una historia larga y rica que se remonta a varias décadas. Fue fundado por Massimo Godoy que se mudó a Italia con un gran amor por la comida y la cultura culinaria de su país. Desde entonces, hemos estado sirviendo platos tradicionales italianos de alta calidad a nuestros clientes.

Con el tiempo, nuestro restaurante se ha convertido en un lugar muy querido en la comunidad mundial, y hemos atraído a una gran variedad de clientes, desde familias hasta personas mayores y amigos que se reúnen para disfrutar de una cena. </p>
      <button type='button' className='custom__button'>Conócenos</button>
    </div>

   </div>

  </div>
);

export default AboutUs;
