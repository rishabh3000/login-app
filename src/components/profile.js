import React from "react";
import {Nav} from 'react-bootstrap';
import reactDom from "react-dom";
import Dashboard from "./dashboard";
import NavBar from "./navBar";


function renderProfile(email, obj){
const elemx = (
  <div className="pf-p">
    <NavBar state={obj}/>
    <div className="profile">
      <h1>Welcome!</h1>
      <div className="body1">
        <br></br>
        <h2>Your email: {email}</h2>
        <br></br>
        <h2>Your username: {obj.codename}</h2>
      </div>
    </div>
  </div>
);
reactDom.render(elemx, document.getElementById('root'));
}

export default renderProfile;
