import React from 'react'; 
import './Reservas.css';



const Reservas = () => {

 
  return (
    <div className='todo'>
    <div className='container'>
      <div className='form__titulo'>
        <div className='form__titulo-h1'>
          <h1 className='headtext__cormorant'>Reserva con Nosotros</h1>
          <hr className='line'/>
        </div>
        </div>
      <div className='col-md-4'>
        
        <form  >
          
          <div className='card card-body'>
            <div className='form-group'>
            <h3>Datos</h3>
            <hr />
            <h6>Nombre:</h6>
              <input
               type="text"
               name='nombre'
                className='form-control mb-3'
                 placeholder='Ingresa tu nombre y apellido'
                 
                 
              />

              <h6>Correo:</h6>
              <input 
              type="email"
              name='correo'
                className='form-control mb-3'
                 placeholder='Ingresa tu correo'
                 
                 
              />

              <h6>Telefono:</h6>
              <input 
              type="tel" 
              name='telefono'
               className='form-control mb-3' 
               placeholder='Ingresa tu telefono'
               
               
              />
            </div>
            <div className='form-group'>
              
              <h3>Reservar mesa</h3>
              <h6>Fecha:</h6>
              <input 
              type="date"
              name='fecha' 
               className='form-control mb-3'
              
              
               />

              <h6>Numero de personas</h6>
              <input 
              type="number" 
              name='numeropersonas'
               className='form-control mb-3'
                max='6' 
                min='1' 
               
              
              />


            </div>
            <button type='submmit' className='btm btn-primary'>
              Guardar
            </button>

          </div>
        </form>
      </div>

    </div>
    </div>
  )
}

export default Reservas;


