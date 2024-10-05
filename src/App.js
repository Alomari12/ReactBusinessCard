import React from 'react';
import About from './components/About/About'
import Header from './components/Header/Header'
import Interests from './components/Interests/Interests'
import Footer from './components/Footer/Footer'

import './App.css';

export default function App() {
  return (
    <div className="App">
      
      <Header />
      <About />
      <Interests />
      <Footer />
        
    </div>
  );
}


