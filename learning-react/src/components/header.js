import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg"

function Header() {
    return (
        <header>
            <img src={logo} id="logo"/>
            <h1><Link to="/footer">Learing React</Link></h1>
        </header>
    )
}

export default Header;