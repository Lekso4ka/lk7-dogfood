import React, {useState} from "react";
import Product from "./pages/Product";
// import Catalog from "./pages/Catalog";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col } from "react-bootstrap";

const App = () => {
    // const st = {
    //     height: "50px",
    //     backgroundColor: "silver",
    //     border: "1px solid darkorchid"
    // }
    // return <Container style={{height: "900px", backgroundColor: "darkorchid"}}>
    //     <Row>
    //         <Col md={12} style={st}/>
    //         <Col md={3} xs={6} style={st}/>
    //         <Col md={3} xs={6} style={st}/>
    //         <Col md={3} xs={6} style={st}/>
    //         <Col md={3} xs={6} style={st}/>
    //         <Col md={12} style={st}/>
    //         <Col md={6} style={st}/>
    //         <Col md={6} style={st}/>
    //         <Col md={12} style={st}/>
    //     </Row>
    // </Container>
    return <Product/>
}

export default App;