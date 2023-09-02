import React from 'react';
import Auth from './components/Auth/Auth';
import Register from './components/Auth/Register/Register';
import Login from './components/Auth/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Customer/Homepage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
