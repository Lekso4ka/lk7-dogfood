import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";
import {XCircle} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export default ({isActive, changeActive}) => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const handler = e => {
        e.preventDefault();
    }
    return <div className={isActive ? "popup-box active" : "popup-box"}>
        <div className="popup">
            <XCircle className="popup-close" onClick={e => {changeActive(false)}}/>
            <Form onSubmit={handler}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        value={pwd} 
                        onChange={e => setPwd(e.target.value)}
                    />
                </Form.Group>
                <Button variant="warning" type="submit">Войти</Button>
            </Form>
        </div>
    </div>
}