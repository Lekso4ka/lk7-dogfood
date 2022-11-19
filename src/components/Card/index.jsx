import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Heart, HeartFill} from "react-bootstrap-icons";
import "./style.css";

const Card = ({name, price, pictures, _id}) => {
    const [like, setLike] = useState(false);
    const imgStyle = {
        backgroundImage: `url(${pictures})`
    };

    return (
        <Link to={`/product/${_id}`}>
            <div className="card">
                <div className="card__img" style={imgStyle}/>
                <div className="card__price">{price} ₽</div>
                <div className="card__text">{name}</div>
                <button className="btn">Вкорзину</button>
                <span className="card__like">
                    {like ? <HeartFill/> : <Heart/>}
                </span>
            </div>
        </Link>
    )
}

export default Card;