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
            


                   
  <h1 className='hh'>Proyects:</h1>
  
  <h2 className='hhh'>CANCHAS YA:</h2>


  
  <h2 className='hhh2'>GIT:<a href='https://github.com/SantiBcra/CanchasYa-PF' target="_blank" rel="noopener noreferrer">LINK </a></h2>


  {lengua  !== 'es' && (
<p>
Application to rent, create and review Fields for different sports and different cities.</p> 
  )}

{lengua  === 'es' && (
<p>Aplicación para alquilar, crear y reseñar canchas de distintos deportes y diferentes ciudades.</p> 
  )}




<div className='vidcont'>
      <video  width="640" height="360"  controls autoPlay muted>
  
  <source src={video}/> 
  
      </video>
  </div> 
      
  
    

    


    
      
      
  


    <h2 className='hhh'>DRIVERS:</h2>
    <h2 className='hhh'>GIT:<a href='https://github.com/SantiBcra/PI_Formula-1' target="_blank" rel="noopener noreferrer">LINK </a></h2>

    {lengua  !== 'es' && (
<p>My First React application, create, search, filter and sort F1 drivers.</p> 
    )}

{lengua  === 'es' && (
<p>Mi Primer aplicacion React, crear, buscar, filtrar y ordenar pilotos de Fórmula 1.</p> 
    )}



    


  
    


    <div className='vidcont'>
    <img src={drivers} height="360" width="640"></img>
    </div>
    
  </div>
    
 



  )
}

export default Proyectos
