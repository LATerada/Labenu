import React from "react";
import logo from "../img/logo.png"

export default function Header(){
    return(
        <header>
            <img className="logo" src={logo} alt="Logo Labenu" width={"100px"}/>
        </header>
    )
}