import React from 'react';
import './App.css';


function App() {
  return (
    <div className = "App">
      <contact 
      Name='Mario Austin' 
      image='https://randomuser.me/api/portraits/men/44.jpg' 
      offline/>
      <contact 
      Name='Danielle Burke' 
      image='https://randomuser.me/api/portraits/women/32.jpg' 
      online/>
      <contact 
      Name='Eva Reyes' 
      image='https://randomuser.me/api/portraits/women/72.jpg' 
      online/>
    </div>
  );
}

export default App;
