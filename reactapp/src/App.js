import React from 'react';
import Auth from './components/Auth/Auth';
import Register from './components/Auth/Register/Register';
import Login from './components/Auth/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Customer/Homepage';
import AdminHomePage from './components/Admin/AdminHomePage';
import AddCenter from './components/Admin/AddCenter';
import Dashboard from './components/Customer/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user/homepage" element={<Homepage />} />
          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="/admin/addServiceCenter" element={<AddCenter />} />
          <Route path="/user/dashboard/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
