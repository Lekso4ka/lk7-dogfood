import React, {useState, useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import { Context } from "../../App";
import Logo from "../Logo";
import {BoxArrowInRight, BoxArrowLeft, PlusCircle} from "react-bootstrap-icons"
import "./style.css";
import {ReactComponent as FavIcon} from "./img/ic-favorites.svg";
import {ReactComponent as CartIcon} from "./img/ic-cart.svg";
import {ReactComponent as ProfileIcon} from "./img/ic-profile.svg";

export default ({openPopup, user, setToken, setUser, likes}) => {
    const nav = useNavigate();
    const {searchText, search, setProducts, goods} = useContext(Context);
    const handler = e => {
        search(e.target.value);
        const result = goods.filter((el => el.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1));
        setProducts(result);
    }
    const logout = e => {
        e.preventDefault();
        localStorage.removeItem("shop-user");
        localStorage.removeItem("u");
        setToken("");
        setUser({});
        nav("/");
    }
    return <>
        <header>
            <Logo/>
            <input type="search" value={searchText} onChange={handler}/>
            <nav>
                {user && <a href=""><FavIcon/><span>{likes}</span></a>}
                {user && <Link to="/add"><PlusCircle/></Link>}
                {user && <Link to="/catalog"><CartIcon/></Link>}
                {user && <Link to="/profile"><ProfileIcon/></Link>}
                {user && <a href="" onClick={logout}><BoxArrowLeft style={{fontSize: "1.6rem"}}/></a>}
                {!user && <a href="" onClick={e => {e.preventDefault(); openPopup(true)}}><BoxArrowInRight style={{fontSize: "1.6rem"}}/></a>}
            </nav>
        </header>

    </>
}