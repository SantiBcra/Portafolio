import React, { useEffect } from 'react';
import Head from './components/head/head'
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import change from './redux/actions/form_actions';
import Home from "./components/home/home"
import About from "./components/about/about"
import AboutMe from "./components/aboutMe/about"
import Proyectos from "./components/proyectos/proyectos"

import 'bootstrap/dist/css/bootstrap.min.css';



import './App.css'

function App() {
  


  const dispatch = useDispatch();


  const handleTabClick = (lan) => {
     dispatch(change(lan));
   };
 
 
   useEffect(() => { 
     
       dispatch(change("en"));
     
   }, [dispatch]);
 



  return (

<div>
<Head/>
    <Routes>
        
       <Route path='/Portafolio/' element={<Home/>} />
       <Route path='/estudios' element={<About/>} />
       <Route path='/about' element={<AboutMe/>} />
       <Route path='/proyectos' element={<Proyectos/>} />
  
  
      
  
    </Routes>
  </div>
  )
}

export default App
