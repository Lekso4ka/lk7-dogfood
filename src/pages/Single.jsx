import React, {useEffect, useState, useContext} from "react";
import { Context } from "../App";
import { useParams } from "react-router-dom";
import { XCircle, CheckCircle, PencilSquare} from "react-bootstrap-icons"

export default () => {
    const {api} = useContext(Context);
    const [product, setProduct] = useState({});
    const [nameFlag, setNameFlag] = useState(false);
    const [name, setName] = useState(product.name || "");
    let params = useParams();
    useEffect(() => {
        api.getProduct(params.id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data);
                setName(data.name);
            })
    }, []); 

    const changeName = (e) => {
        e.preventDefault();
        api.updProduct(params.id, {name: name})
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data);
                setName(data.name);
                setNameFlag(false);
            })
    }
    return <>
        <div className="product__row">
            {
                nameFlag ? 
                <>
                    <input className="product__inp" value={name} onChange={(e) => setName(e.target.value)}/>
                    <a href="" className="product__btn" onClick={changeName}><CheckCircle/></a>
                    <a href="" className="product__btn" onClick={(e) => {
                        e.preventDefault();
                        setNameFlag(false);
                        setName(product.name);
                    }}><XCircle/></a>
                </>
                :
                <>
                    <h1>{product.name}</h1>
                    <a href="" className="product__btn" onClick={(e) => {
                        e.preventDefault();
                        setNameFlag(true)
                    }}><PencilSquare/></a>
                </>
            }
        </div>
    </>
}

/*
    <DataRow {}>
    <DataRow {}>
    <DataRow {}>
    <DataRow {}>
    <DataRow {}>
    <DataRow {}>
*/