import './App.css';
import 'rapidoc';
import React, { useState } from 'react';
import ServiceList from './components/ServiceList';


function App() {

  return (
    <div className="App">
        <ServiceList/>
     </div>
  );
}

export default App;
