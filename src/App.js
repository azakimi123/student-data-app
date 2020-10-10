import React from 'react';
import logo from './logo.svg';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Auth />
      <Dashboard />
    </div>
  );
}

export default App;
