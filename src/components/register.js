import React from "react";
import LoginComponent from "./login";
import UserManager from "./functions";

const user = new UserManager();
function registerAccept() {
  user.register(document.getElementById("email1").value, document.getElementById("pwd2").value);

};

function RegisterElement() {
  return (
    <div>
      <div className="App">
        <h1>Welcome to Schooglink!</h1>
        <div id="main">
          <div className="h-tag">
            <h2>Register yourself</h2>
          </div>
          <div className="login">
            <table cellSpacing="2" align="center" cellPadding="8" border="0">
              <tr>
                <td>Enter your Name :</td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter your name here"
                    id="name"
                    className="tb"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>Enter email :</td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter user name here"
                    id="email1"
                    className="tb"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>Date of Birth :</td>
                <td>
                  <input
                    type="text"
                    placeholder=""
                    id="dob"
                    className="tb"
                  />
                </td>
              </tr>
              <tr>
                <td>Gender :</td>
                <td>
                  <select
                    placeholder=""
                    id="gender"
                    className="tb"
                  />
                </td>
              </tr>
              <tr>
                <td>State :</td>
                <td>
                  <input
                    type="text"
                    id="state"
                    className="tb"
                  />
                </td>
              </tr>
              <tr>
                <td>Country :</td>
                <td>
                  <input
                    type="text"
                    id="country"
                    className="tb"
                  />
                </td>
              </tr>
              <tr>
                <td>Address :</td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter user name here"
                    id="address"
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
                    id="pwd2"
                    className="tb"
                    required
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
                    onClick={() => {
                      document.getElementById("email1").value = "";
                      document.getElementById("pwd2").value = "";
                    }}
                  />
                  <input
                    type="submit"
                    value="Register"
                    className="btn"
                    onClick={(e) => {
                        e.preventDefault();
                        registerAccept();
                        <LoginComponent/>
                    }}
                  />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterElement;
