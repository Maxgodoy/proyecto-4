import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import {images, data} from '../../constants'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Nuestro Menu en tus manos'/>
      <h1 className='headtext__cormorant'>Dia especial</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_platos flex_center'>
        <p className='app__specialMenu-menu_heading'>Platos</p>
        <div className='app__specialMenu_menu_items'>
          {data.platos.map((plato,index)=>(
            <MenuItem key={plato.title + index} title={plato.title}  price={plato.price} tags={plato.tags}/>
            
          ))}
        </div>
      </div>
      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt="Imagen pizza" />
      </div>
      <div className='app__specialMenu-menu_cocktails flex_center'>
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className='app__specialMenu_menu_items'>
          {data.cocktails.map((cocktail,index)=>(
             <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
          ))}
        </div>
      </div>

    </div>
    <div style={{marginTop: '15px'}}>
      <button type='button' className='custom__button'>Ve más</button>
    </div>
  </div>
);

export default SpecialMenu;
