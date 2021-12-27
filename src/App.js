import React from "react";
import UserManager from "./components/functions";
import './App.css';
import LoginComponent from "./components/login";

const user = new UserManager();

function App() {
  return (
    <LoginComponent/>
  );
  
}

export default App;