import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Account } from "./pages/Accountpage";
import { Homepage } from "./pages/Homepage";
import { Navbar } from "./components/navbar/Navbar";
import { Header } from "./containers/header/Header";


import "./App.css";


const App = () => (
 
  <div className="App">
    <Routes>
    <Route path="/home" element= { <Homepage />} />
    <Route path="/account" element={ <Account />} /> 
    </Routes>   
  </div>

);

export default App;
