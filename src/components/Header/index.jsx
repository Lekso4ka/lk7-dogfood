import React from "react";
import Logo from "../Logo";
import "./style.css";

export default () => {
    return <header>
        <Logo/>
        <input type="search"/>
        <nav>
            <a href="">Favorites</a>
            <a href="">Cart</a>
            <a href="">Profile</a>
        </nav>
    </header>
}