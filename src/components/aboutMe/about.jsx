
import { useDispatch, useSelector } from "react-redux";
import change from '../../redux/actions/form_actions';
import espana from "../../../public/espana.png" 
import eeuu from "../../../public/estados-unidos.png" 
import "./about.css"
import santiago from "../../../public/CURRICULUM.png"

function AboutMe() {

 
  const  lengua = useSelector(state => state.lengua);

  


  const handleTabClick = (lan) => {
    dispatch(change(lan));
  };



    return (

<div className="cont"> 





        <h1 className="hh">About Me:</h1>


        <img className="pictur" src={santiago}></img> 

          {lengua !== 'en' && (
            <p >

          
            -Hola! Mi nombre es Santiago, vivo en Córdoba Capital Argentina, soy desarrollador Fullstack egresado 
          de Henry, lidere la construcción de una aplicación de reserva de canchas para distintas ciudades, trabajando tanto en front como back end, 
          principalmente resolviendo bugs. Mi propósito es aportar y resolver problemas
          en el menor tiempo posible logrando rápidamente funcionalidades nuevas o corrigiendo errores.

        

          </p>
          )}
          
          {lengua === 'en' && (
            <p>-Hello! My name is Santiago, I live in Córdoba Capital Argentina, I am a Fullstack developer graduated from Henry, I lead the construction of an application for booking courts for different cities, working both front and back end, mainly solving bugs. My purpose is to contribute and solve problems in the shortest
               time possible quickly achieving new features or fixing bugs.
               
            
               </p>
        
          )}
      <div className="contactos">

              
              <h3 className="hhhh">Phone: +54 351 707 1239</h3>
              <h3 className="hhhh">Mail: santiariel1705@gmail.com</h3>
              <h3 className="hhhh">Intagram: santuch.o</h3>

      </div>
          
   
  
    </div>
    )
  }
  
  export default AboutMe
  