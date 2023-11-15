import React from 'react';
import { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import change from '../../redux/actions/form_actions';
import "./proyectos.css"

import video from "../../../public/canchas.mp4"
import drivers from "../../../public/drivers.png"

function Proyectos() {


  const dispatch = useDispatch();



  useEffect(() => {
    console.log("se mando")
    dispatch(change("en"));
  
}, [dispatch]);












  const lengua = useSelector(state => state.lengua);

  


 


  

  return (


    
  <div className='cont'>
            
  <h1>Proyects:</h1>
  
  <p>CANCHAS YA:
  <h3>GIT:<a href='https://github.com/SantiBcra/CanchasYa-PF' target="_blank" rel="noopener noreferrer">LINK </a></h3>


  {lengua  !== 'es' && (
<p>
Application to rent, create and review Fields for different sports and different cities.</p> 
  )}

{lengua  === 'es' && (
<p>Aplicación para alquilar, crear y reseñar canchas de distintos deportes y diferentes ciudades.</p> 
  )}





    <div className='card-container'>
      
    <div className='vidconttt'>
    <video  width="770" height="470"  controls autoPlay muted>

<source src={video}/> 

    </video>
</div> 
    </div>

    

    </p>

    <p>DRIVERS:
    <h3>GIT:<a href='https://github.com/SantiBcra/PI_Formula-1' target="_blank" rel="noopener noreferrer">LINK </a></h3>

    {lengua  !== 'es' && (
<p>My First React application, create, search, filter and sort F1 drivers.</p> 
    )}

{lengua  === 'es' && (
<p>Mi Primer aplicacion React, crear, buscar, filtrar y ordenar pilotos de Fórmula 1.</p> 
    )}



    <div className='card-container'>
    <img src={drivers} height="470px" width="770"></img>
    </div>


  
    </p>
    
  </div>
    
 



  )
}

export default Proyectos
