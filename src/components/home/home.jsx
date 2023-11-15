import React from 'react';
import {Link} from "react-router-dom"
import video from "../../../public/pres.mp4"





import "./home.css"

import "./home.css"
function Home() {

    return (
   <div className='cont'>
    
<h1 className='hh'>Santiago Becerra</h1>

<h2>FULL STACK DEV:</h2>
<p> 
  HTML - CSS - JS - REACT - REDUX - NODE JS - SEQUELIZE - POSTGRE DB
  </p>

  
  
 
<div className='vidcont'>
    <video  width="640" height="360"  controls autoPlay muted>

<source src={video}/> 

    </video>
</div> 

<br></br>
<br></br>



{/* 
<video width="640" height="360" controls autoplay>
  	<source src="011-html5-video-golden_gate_bridge_timelapse_hd_stock_video.mp4" type="video/mp4">
  	Tu navegador no soporta HTML5 video.
</video> */}



<div className='cont'>
<h3> GIT: <a href="https://www.github.com/SantiBcra" target="_blank" rel="noopener noreferrer">  LINK</a> </h3>
<h3>LINKEDIN: <a href="https://www.linkedin.com/in/santiago-becerra-81361829b/" target="_blank" rel="noopener noreferrer">  LINK</a> </h3> 
</div>
  


</div>
  
    )
  }
  
  export default Home
  