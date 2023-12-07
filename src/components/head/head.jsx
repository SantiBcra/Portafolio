import React, { useEffect } from 'react';
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import change from '../../redux/actions/form_actions';
import espana from "../../../public/espana.png" 
import eeuu from "../../../public/estados-unidos.png" 
import logo from "../../../public/Ciclos final - logo S PNG.png"
import "./head.css"

function Head() {

  const dispatch = useDispatch();


  // useEffect(() => { 
    
  //     dispatch(change("en"));
    
  // }, [dispatch]);

  
  

 


  return (
<nav className='nav'> 

<a href='#home' ><img class='logos' src={logo}></img></a>



<div className='item-cont'>

  
  <a href='#proyecto' ><div class="items">PROYECTS </div></a>
  <a href='#us' ><div class="items">ABOUT US </div></a>
  <a href='#final' ><div class="items">CONTACT </div></a>
  

</div>

<script type="text/javascript">{
		window.addEventListener("scroll", function(){
			var header = document.querySelector("nav");
			header.classList.toggle("abajo",window.scrollY>0);
		})}
	</script>

</nav>
  )
}

export default Head
