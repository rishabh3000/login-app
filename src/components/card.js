import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./navBar";

function Tile(imglnk, title, head, data, func){
    return(
        <div>
            <NavBar />
            <h1>{head}</h1>
            <p>Choose your {head} </p>
            {{data}.map(() => (
                   <Card
                   style={{
                     width: "18rem",
                     display: "grid",
                     gridTemplateColumns: "1fr 1fr 1fr",
                   }}
                 >
                   <Card.Img
                     variant="top"
                     src={imglnk}/>
                   <Card.Body>
                     <Card.Title>
                       {title}
                     </Card.Title>
                     <Button variant="primary" onClick={() => (
                         {func}
                     )}>
                       Explore!
                     </Button>
                   </Card.Body>
                 </Card>
                ))}
        </div>
    )
}

export default Tile;