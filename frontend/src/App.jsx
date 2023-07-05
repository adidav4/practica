import React from 'react';
import  Login from "./login";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Register  from "./Register";
import Home from './home';
import Layout from './Layout';
import Textai from './textai';

function App() {
  return (
    <Router>
      <Routes>
          <Route element={<Layout/>}>
          <Route path="/" element={<Home />}/>
          <Route path="/textai" element={<Textai/>} />
          </Route>
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} />
       </Routes> 
    </Router>
  );
}

export default App;