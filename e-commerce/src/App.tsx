import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Preloader } from '@/components/common';
import PropType from 'prop-types';
import React, { StrictMode } from 'react';
import AppRouter from './routers/AppRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
      <StrictMode>
   
      <BrowserRouter>

        <AppRouter />
      
        </BrowserRouter>

  </StrictMode>
    
    </>
  )
}

export default App
