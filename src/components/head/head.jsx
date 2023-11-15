import React, { useEffect } from 'react';
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import change from '../../redux/actions/form_actions';
import espana from "../../../public/espana.png" 
import eeuu from "../../../public/estados-unidos.png" 
import "./head.css"

function Head() {

  const dispatch = useDispatch();


 const handleTabClick = (lan) => {
    dispatch(change(lan));
  };


  useEffect(() => { 
    
      dispatch(change("en"));
    
  }, [dispatch]);

  
  

 


  return (
<div className='nav'> 

<div className='item-cont'>
  
 <Link to ={`/`} >
  <div class="items">HOME </div>
  </Link>

  <Link to ={`/proyectos`} >
  <div class="items">MY WORK </div>
  </Link>



  <Link to ={`/about`} >
  <div class="items">ABOUT ME </div>
  </Link>

  <Link to ={`/estudios`} >
  <div class="items">EDUCATION </div>
  </Link>

  

  

</div>

<div className='item-contt'>

<Link to ={`/about`} >
  <div class="contact">CONTACT ME </div>
  </Link>

<img className='logo' src={espana} onClick={() => handleTabClick('es')} />
   <br></br>
 <img className='logo' src={eeuu} onClick={() => handleTabClick('en')}/>

 

</div>

</div>
  )
}

export default Head
