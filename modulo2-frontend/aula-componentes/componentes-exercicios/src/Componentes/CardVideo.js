import React from "react"
import InfoUsuarios from "./InfoUsuarios";
// import src from "../img/"

export default function CardVideo(props){
    // const titulo = "Título do vídeo";
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
      }
    return(
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src={props.card.imgSrc} alt={props.card.alt} />
            <h4>{props.card.titulo}</h4>
            <InfoUsuarios usuario = {props.usuario} />
        </div>
    )
}