import React from 'react';
import UserManager from './functions';
import reactDom from "react-dom";
import RegisterElement from "./register";

const user = new UserManager();
function rerender(obj) {
  user.login(document.getElementById("email").value, document.getElementById("pwd1").value);
  //reactDom.render(elemx, document.getElementById('root'));
}
export default function LoginComponent(element){
    return (
      <div className="App" >
        <h1>Welcome to Schooglink!</h1>
        <div id="main">
          <div className="h-tag">
            <h2>Welcome To My Account Login</h2>
          </div>
          <form>
            <div className="login">
              <table cellSpacing="2" align="center" cellPadding="8" border="0">
                <tr>
                  <td>Enter User Name :</td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter user name here"
                      id="email"
                      className="tb"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Enter Password :</td>
                  <td>
                    <input
                      type="password"
                      placeholder="Enter Password here"
                      id="pwd1"
                      className="tb"
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <input
                      type="submit"
                      value="Clear"
                      onClick="clearFunc()"
                      className="btn"
                      onClick={() => {document.getElementById("email").value = ""; document.getElementById("pwd1").value = "";}}
                    />
                    <input
                      type="submit"
                      value="Login"
                      className="btn"
                      onClick={(e) => {e.preventDefault();rerender();}}
                    />
                  </td>
                </tr>
                <button onClick={(e) => {
                    e.preventDefault();
                    reactDom.render(<RegisterElement/>, document.getElementById('root'));
                    console.log("here");
                  }}>Register</button>
              </table>
            </div>
          </form>
        </div>
    </div>
    )
}