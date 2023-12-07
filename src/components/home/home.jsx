import React from 'react';
import ReactPlayer from 'react-player';

import footer from "../../../public/Ciclos final - logo grande PNG.png"
import wats from "../../../public/whatsapp.png"
import inst from "../../..//public/instagram.png"
import studioa from "../../../public/studio1.jpg"
import studiob from "../../../public/studio2.jpg"
import studioc from "../../../public/studio3.jpg"




import "./home.css"

import "./home.css"
function Home() {

    return (
   <div className='cont'>
    


<div id='home' className ='panel'>
  

<div className='tituloprin'>CICLOS


<div className='subtitulo'>LA MÚSICA</div>
<div className='subtitulo'>PRIMERO SIEMPRE</div>
</div>





</div>


<div className='panel3' >

<div className="cartas">

    <div className="carta">
    <h3>Grabacion</h3>
    <p>- Trabajamos de manera híbrida con elementos digitales y analógicos
        teniendo la posibilidad de grabar estilos como trap, rock y folk en la mejor calidad.
        <br></br>
        
    </p>
    </div>

    <div className="carta">
    <h3>Mezcla y Master</h3>
    <p>- Mezclamos tus canciones a nivel profesional. 
        Parametros estandar de la industria con alta fidelidad.
        <br></br>
        <br></br>
        <br></br>
        </p>
    
    </div>

    <div className="carta">
    <h3>Produccion</h3>
    
    <p>- Dirección y asesoramiento musical para plasmar tu cancion en su Mejor punto.
    Gestión de licencias musicales.
    
    <br></br>
        <br></br>
        <br></br>
        
        
    </p>
    </div>


</div>


<div className='galeria'>
<img class='fottoV' src={studioa}></img>
<img class='fotto' src={studiob}></img>
<img class='fottoV' src={studioc}></img>
</div>


</div>



<div id='proyecto' className='panel4' >
<h2>Nuestro Trabajo</h2>
<ReactPlayer  url="https://www.youtube.com/watch?v=HNDqvUkwBUw"   
height="50%"
width="50%"
controls
/>

<div id='us' className='panel2'>
<h2>About Us</h2>
<p className='white'>En Ciclos lo que amamos es hacer Música. Queremos ayudarte a
completar tus proyectos, tu CICLO, de la forma más amena y satisfactoria
posible, como lo imaginaste siempre (o mejor aún). Sin vueltas, simplemente
música y momentos. Un sello hecho por y para artistas independientes,
pensando en todo momento en las necesidades que esto conlleva. Es
momento de que ese tema que tenés guardado vea la luz, las canciones no
nacen para vivir escondidas.
</p>
<h2>LA MÚSICA PRIMERO, SIEMPRE.</h2>

</div>


</div>

 <div  className='pie'> 
  <img class='fott' src={footer}></img>
  <h2>Contact:</h2>

  <div  id='final' className='contacto'>
    
    <img class='logo' src={wats}></img> 
        <h4>351 672 8316</h4>
      <img class='logo' src={inst}></img>
      <h4>@ciclosrecords</h4>
     
    </div> 

</div> 




</div>
  
    )
  }
  
  export default Home
  