import React from "react"
// import img from "../img/logo.png"

export default function InfoUsuarios(props){
    return(
        <div className="info-usuario">
            <span><img className="foto-usuario" src={props.usuario.imgSrc} alt={props.usuario.alt} /></span>
            <span>{props.usuario.nome}</span>
        </div>
    )
}