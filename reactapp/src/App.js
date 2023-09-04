import React from 'react';
import Auth from './components/Auth/Auth';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;

