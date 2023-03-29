import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatDota,
  Header,
} from "./containers";
import { CTA, Brand, Navbar, SubmitForm } from "./components";

import "./App.css";

const App = () => (
 
  <div className="App">
   
    <div className="gradient__bg">
       <Navbar/>
    </div>  
    <Routes>
    <Route path="/home" element= { <Header />} />
    <Route path="/account" element={<SubmitForm/>} /> 
    </Routes>
  </div>

);

export default App;
