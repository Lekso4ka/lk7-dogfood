import React, {useState} from "react";
// import Product from "./pages/Product";
import Catalog from "./pages/Catalog";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col } from "react-bootstrap";

const App = () => {
    const [goods, setGoods] = useState([]);
    return <>
        <div className="wrapper">
            <Header products={goods} update={setGoods}/>
            <Catalog goods={goods}/>
            <Footer/>
        </div>
    </>
}

export default App;