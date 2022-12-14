import React, {useEffect, useState, useContext} from "react";
import { Context } from "../App";
import { useParams } from "react-router-dom";
import data from "../assets/data.json";
import {Container, Row, Col, Figure, Table, ButtonGroup, Button} from "react-bootstrap";
// {
//     "id": 1,
//     "price": 550,
//     "discount": 15,
//     "wight": "100 г",
//     "description": "Описание demo",
//     "isFavorite": false,
//     "isCart": false,
//     "available": true,
//     "stock": 10,
//     "picture": "https://react-learning.ru/image-compressed/1.jpg",
//     "tags": ["new"]
// },
export default () => {
    const {api} = useContext(Context);
    let p = data[0];
    const [product, setProduct] = useState({});
    const [cnt, setCnt] = useState(0);
    let params = useParams();
    useEffect(() => {
        api.getProduct(params.id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data);
            })
    }, []); 
    return <Container>
        {product._id &&
            <Row>
                <Col xs={12}>
                    <h1>{p.name}</h1>
                </Col>
                <Col xs={12} md={8}>
                    <Figure>
                        <Figure.Image src={p.picture}/>
                    </Figure>
                </Col>
                <Col xs={12} md={4}>
                    {p.discount && <small><del>{p.price} ₽</del></small>}
                    <div><strong className={p.discount ? "text-danger" : "text-dark"}>{Math.ceil(p.price * ((100 - p.discount) / 100))} ₽</strong></div>
                    <Row>
                        <Col md={6}>
                        <ButtonGroup>
                            <Button size="sm" variant="light" disabled={!cnt} onClick={e => setCnt(cnt - 1)}>-</Button>
                            <Button size="sm" variant="light" disabled>{cnt}</Button>
                            <Button size="sm" variant="light" onClick={e => setCnt(cnt + 1)}>+</Button>
                        </ButtonGroup>
                        </Col>
                        <Col md={6}>
                        <Button size="sm" variant="warning">В корзину</Button>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12}>
                    <h2>Описание</h2>
                    <p>{p.description}</p>
                </Col>
                <Col xs={12}>
                    <h2>Характеристики</h2>
                    <Table hover>
                        <tbody>
                            <tr>
                                <th>Вес</th>
                                <td>{p.wight}</td>
                            </tr>
                            <tr>
                                <th>Цена</th>
                                <td>{p.price} ₽ за 100 грамм</td>
                            </tr>
                            <tr>
                                <th>Польза</th>
                                <td>{p.description}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col xs={12}>
                    <h2>Отзывы</h2>
                </Col>
            </Row>
        }
    </Container>
}