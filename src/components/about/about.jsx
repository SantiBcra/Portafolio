import image from "../../../public/diploma.jpg"
import './about.css'



function About() {




    return (
<div className="cont">


<h1 className="hh">Tech Skills:</h1>
<p> HTML - CSS - BOOTSTRAP - JS - REACT - REDUX - NODE JS - SEQUELIZE - POSTGRE DB</p>

<h1 className="hh">Soft Skills:</h1>
<p><h3 className="hhhh">ENGLISH B2:  <a href="https://www.efset.org/cert/4WbgRS" target="_blank" rel="noopener noreferrer">Link </a> - COMMUNICATION - AGILE METHODOLOGIES - COLLABORATION</h3>
</p>
  <div className="img-container"> 


<img className= "image" src={image}></img>

  </div>
  

</div>
    )
  }
  
  export default About
  