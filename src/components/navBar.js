import React from "react";
import {Nav} from 'react-bootstrap';
import Dashboard from "./dashboard";
import reactDom from "react-dom";


function NavBar(state){
    return(
        <Nav justify variant="tabs" defaultActiveKey="/home" style={{ color:"white", linkStyle: "none"}}>
            <Nav.Item>
                <Nav.Link href="" onClick={(e) => e.preventDefault()}>Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="" onClick={(e) => {
                    // e.preventDefault();
                    reactDom.render(<Dashboard state={state}/>, document.getElementById('root'));
                }} eventKey="link-2">Dashboard</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
export default NavBar;