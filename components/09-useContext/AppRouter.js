import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen'
import { AboutScreen } from './AboutScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
  return (
      <Router>
          <div >
              <NavBar />

              <div className='container'>
       
               {/**<Routes></Routes> Nos ayuda a mostrar rutas */}
               <Routes>
                   <Route path="/" element={<HomeScreen/>}/>
                   <Route path="/about" element={<AboutScreen/>}/>
                   <Route path="/loginscreen" element={<LoginScreen/>}/>
                   
                   {/* Si no se encuentra la ruta va al homeScreen, tambien podria definirse un 404page */}
                   <Route path='*' element={<HomeScreen />} />
               </Routes>
            
               </div>
            </div>
      </Router>
  );
};
