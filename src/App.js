import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReducerCount from './Compinents/ReducerCount/ReducerCount';
import PatientManagement from './Compinents/PatientManagement/PatientManagement';


function App() {
  return (
    <div className="App">
      
        <ReducerCount></ReducerCount>
        
        <PatientManagement></PatientManagement>
      
    </div>
  );
}

export default App;
