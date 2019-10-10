import React from 'react';
import './App.css';
import Contact from './components/Contact';


function App() {
  return (
    <div className = "App">
      <Contact 
      name="Mario Austin" 
      image='https://randomuser.me/api/portraits/men/44.jpg' 
      offline/>
      <Contact 
      name="Danielle Burke" 
      image="https://randomuser.me/api/portraits/women/32.jpg" 
      online/>
      <Contact 
      name="Eva Reyes" 
      image="https://randomuser.me/api/portraits/women/72.jpg" 
      online/>
    </div>
  );
}

export default App;