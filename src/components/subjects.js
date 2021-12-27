import React from "react";
import reactDom from "react-dom";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./navBar";
import axios from "axios";
import usePromise from "react-promise";

function getSubjects (token, codename, classId) {
  /**
  * Get subjects with the details 
*/const prom = new Promise((resolutionFunc, rejectionFunc) => {
  axios.post('https://curriculum-django-staging.schooglink.com/version1.0/curriculum/listsubjects/', {
      token: token,
      codeName: codename,
      ipAddress: "127.0.0.1", //change ip later
      classId: classId,
  }, {headers:{
      "Content-Type": "application/json"
  }})
  .then( res => {
    let q = res.data.RV.map((e) => (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={e.subjectIcon} />
        <Card.Body>
          <Card.Title>{e.subjectName}</Card.Title>
          <Button variant="primary">Explore!</Button>
        </Card.Body>
      </Card>
    ));
      resolutionFunc(<div>
        <NavBar />
        {q}
        <p>hejo</p>
      </div>);
  });
})
  return prom;
}
function Subjects(state,cid) {
  console.log(state);
  let p = null;
  p = getSubjects(state.state.state.state.token,state.state.state.state.codename,state.cid);
  
  const {value,loading} = usePromise(p);
  if (loading) return <div> hejjo </div>;
  return <div>{value}</div>;
}
export default Subjects;