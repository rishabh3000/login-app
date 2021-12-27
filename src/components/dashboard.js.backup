import React from "react";
import reactDom from "react-dom";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./navBar";
import axios from "axios";

let x = [];
function v(l, r) {
  let x = [];
  while (l.length) {
    x.push(l.splice(0, r));
  }
  return x;
}

function Dashboard(state) {
  console.log(state);
  let k = state;
  state = state.state.state;

  let p = v(state.boards, 3);
  console.log();
  let b = [];
  p.map((e) => {
    e.map((e) => {
      b.push(e);
    });
  });
  return (
    <div
      className="dash-de"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      <NavBar />
      <h1>BOARDS</h1>
      <p>Choose your board </p>
      {b.map((e) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={e.boardIcon} />
          <Card.Body>
            <Card.Title>{e.boardName}</Card.Title>

            <Button
              variant="primary"
              onClick={() => {
                // CLasses
                console.log(e);
                reactDom.render(
                  <div
                    className="dash-de"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                    }}
                  >
                    <NavBar />
                    <h1>CLASSES</h1>
                    <p>Choose your class </p>
                    {e.Classes.map((e) => (
                      <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={e.classIcon} />
                        <Card.Body>
                          <Card.Title>{e.className}</Card.Title>
                          <Button
                            variant="primary"
                            style={{ backgroundColor: "#405d27" }}
                            onClick={(ex) => {
                              console.log(e);
                              let elem = <p>hejjo</p>;
                              axios
                                .post(
                                  "https://curriculum-django-staging.schooglink.com/version1.0/curriculum/listsubjects/",
                                  {
                                    token: state.token,
                                    codeName: state.codename,
                                    ipAddress: "127.0.0.1", //change ip later
                                    classId: e.classId,
                                  },
                                  {
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                  }
                                )
                                .then((res) => {
                                  console.log(res);
                                  let elem = [];
                                  elem.push(
                                    <div align="center" className="main">
                                      <NavBar />
                                      <h1 align="middle">Subjects</h1>
                                    </div>
                                  );
                                  res.data.RV.map((e) => {
                                    elem.push(
                                      <Card
                                        style={{
                                          //   border: "2px solid red",
                                          width: "18rem",
                                          display: "grid",
                                          gridTemplateColumns: "1fr 1fr 1fr",
                                        }}
                                      >
                                        <Card.Img
                                          variant="top"
                                          src={e.subjectIcon}
                                        />
                                        <Card.Body>
                                          <Card.Title>
                                            {e.subjectName}
                                          </Card.Title>
                                          <Button variant="primary">
                                            Explore!
                                          </Button>
                                        </Card.Body>
                                      </Card>
                                    );
                                    reactDom.render(
                                      elem,
                                      document.getElementById("root")
                                    );
                                  });
                                });
                            }}
                          >
                            Explore!
                          </Button>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>,
                  document.getElementById("root")
                );
              }}
            >
              Explore!
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Dashboard;
