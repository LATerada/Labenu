import React from "react"
import InfoUsuarios from "./InfoUsuarios";
// import src from "../img/foto.jpg"

export default function CardVideo(){
    const titulo = "Título do vídeo";
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
      }
    return(
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src="https://i.picsum.photos/id/11/400/400.jpg?hmac=UVyNoUXjCWtSwvIv7zWmH83Z4nX5yLLUpqMT8Sx-5vE" alt="" />
            <h4>{titulo}</h4>
            <InfoUsuarios></InfoUsuarios>
        </div>
    )
}