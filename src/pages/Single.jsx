import React, {useEffect, useState, useContext} from "react";
import { Context } from "../App";
import { useParams } from "react-router-dom";

import ProductCell from "../components/ProductCell";

export default () => {
    const {api} = useContext(Context);
    const [product, setProduct] = useState({});
    let params = useParams();
    useEffect(() => {
        api.getProduct(params.id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data);
            })
    }, []); 

    // let arr = [1,2,3]
    // arr.sort() // меняет это же массив (массив перезапишется)
    // arr.forEach() // массив не изменяется и ничего не возвращает
    // arr.filter()//.map() // возвращает новый массив => [2]

    const types = [{k: "name", props: {}}, "pictures", "price"];
    
    return <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px"}}>
       {product.name && <ProductCell value={product.name} setProduct={setProduct} id={params.id} type="name" tagMain="h1" tagInp="input"/>}
       {product.pictures && <ProductCell value={product.pictures} setProduct={setProduct} id={params.id} type="pictures" tagMain="img" tagInp="input"/>}
       {product.price >= 0 && <ProductCell value={product.price} setProduct={setProduct} id={params.id} type="price" tagMain="div" tagInp="input"/>}

       {product.discount >= 0 && <ProductCell value={product.discount} setProduct={setProduct} id={params.id} type="discount" tagMain="div" tagInp="select"/>}

       {product.wight && <ProductCell value={product.wight} setProduct={setProduct} id={params.id} type="wight" tagMain="div" tagInp="input"/>}
       {product.description && <ProductCell value={product.description} setProduct={setProduct} id={params.id} type="description" tagMain="p" tagInp="textarea"/>}
    </div>
}