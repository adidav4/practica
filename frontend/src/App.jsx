import React from 'react';
import  Login from "./login";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Register  from "./Register";
import Home from './home';
import Navigation from './Navigation';

function App() {
  return (
    <Router>
      <div>
      <Navigation />
      <Routes>
          <Route path="/" element={<Home />} />
       </Routes>
      </div>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
       </Routes>
      </div>
    </Router>

  );
}

export default App;