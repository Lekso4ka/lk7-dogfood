import React, {useState, useEffect, useContext} from "react";
import { Context } from "../../App";
import {Link} from "react-router-dom";
import {Heart, HeartFill} from "react-bootstrap-icons";
import "./style.css";
import Local from "../../Local";

const Card = ({name, price, pictures, _id, likes, setFav}) => {
    const {api} = useContext(Context);
    const [like, setLike] = useState(false);
    const imgStyle = {
        backgroundImage: `url(${pictures})`
    };
    useEffect(() => {
        let id = Local.getItem("u", true)._id;
        // Найти мое id в сиске с likes
        if (likes.includes(id)) {
            setLike(true);
        }
    }, [])

    // console.log(_id);

    const likeHandler = e => {
        e.stopPropagation();
        e.preventDefault();
        setLike(!like)
        api.setLike(_id, !like)
            .then(res => res.json())
            .then(data => {
                console.log(data, like);
                if (!like) {
                    setFav(prev => {return [...prev, data]})
                } else {
                    setFav(prev => prev.filter(el => el._id !== _id))
                }
                console.log(data);
            })
    }

    return (
        <Link to={`/product/${_id}`}>
            <div className="card">
                <div className="card__img" style={imgStyle}/>
                <div className="card__price">{price} ₽</div>
                <div className="card__text">{name}</div>
                <button className="btn">Вкорзину</button>
                <span
                    className="card__like"
                    onClick={likeHandler}
                >
                    {like ? <HeartFill/> : <Heart/>}
                </span>
            </div>
        </Link>
    )
}

export default Card;