import React, {useState, useContext} from "react";
import "./style.css";
import { Context } from "../../App";
import { XCircle, CheckCircle, PencilSquare} from "react-bootstrap-icons";

export default ({setProduct, id, value, type, tagMain, tagInp}) => {
    const {api} = useContext(Context);
    const [flag, setFlag] = useState(false);
    const [content, setContent] = useState(value);

    const change = (e) => {
        e.preventDefault();
        let obj = {};
        obj[type] = content;
        api.updProduct(id, obj)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data);
                setContent(data[type]);
                setFlag(false);
            })
    }
    const cancel = (e) => {
        e.preventDefault();
        setFlag(false);
        setContent(value);
    }
    return <>
        <div className="product__row">
            {
                flag ? 
                <>
                    
                    {tagInp === "input" && <input className="product__inp" type={type === "price" ? "number" : "text"} value={content} onChange={(e) => setContent(e.target.value)}/>}
                    {tagInp === "textarea" && <textarea className="product__inp" value={content} onChange={(e) => setContent(e.target.value)}></textarea>}
                    {tagInp === "select" && <select className="product__inp" value={content} onChange={(e) => setContent(e.target.value)}>
                        <option>0</option>
                        <option>5</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                    </select>}
                    <a href="" className="product__btn" onClick={change}><CheckCircle/></a>
                    <a href="" className="product__btn" onClick={cancel}><XCircle/></a>
                </>
                :
                <>
                    {tagMain === "img" && <img src={content} width="300"/>}
                    {tagMain === "h1" && <h1>{content}</h1>}
                    {tagMain !== "img" && tagMain !== "h1" && <div>{content}</div>}
                    <a href="" className="product__btn" onClick={(e) => {
                        e.preventDefault();
                        setFlag(true);
                    }}><PencilSquare/></a>
                </>
            }
        </div>
    </>
}