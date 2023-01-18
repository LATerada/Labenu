import React from "react";
import "./styles.css";
import CardVideo from "./Componentes/CardVideo";
import imgUsuario1 from "./img/logo.png"
import imgUsuario2 from "./img/conway.jpeg"
import imgUsuario4 from "./img/dev.webp"
import imgUsuario5 from "./img/css.png"


export default function App() {
  const card1 = {
    imgSrc: "https://i.picsum.photos/id/11/400/400.jpg?hmac=UVyNoUXjCWtSwvIv7zWmH83Z4nX5yLLUpqMT8Sx-5vE", 
    alt: "",
    titulo: "Título - 1"
  }
  const card2 = {
    imgSrc: "https://i.picsum.photos/id/944/200/200.jpg?hmac=1Hdj8yjDsg6pbmgsiAGRdUQ8MA4hfi4uapepYyrMaGU", alt: "",
    titulo: "Título - 2"
  }
  const card3 = {
    imgSrc: "https://i.picsum.photos/id/661/200/200.jpg?hmac=pTRumV7JHMWLu9tuOU6quaMWqF-oxcymEOAvPNfXG4I", alt: "",
    titulo: "Título - 3"
  }
  const card4 = {
    imgSrc: "https://i.picsum.photos/id/456/200/200.jpg?hmac=Nu8ETZuaEwOyl13MjrpOo92an166yAu4I2emrU09uxg", alt: "",
    titulo: "Título - 4"
  }
  const card5 = {
    imgSrc: "https://i.picsum.photos/id/154/200/200.jpg?hmac=ljiYfN3Am3TR0-aMErtWNuSQm8RTYarrv2QJfmWG6Cw", alt: "",
    titulo: "Título - 5"
  }
  const card6 = {
    imgSrc: "https://i.picsum.photos/id/403/200/200.jpg?hmac=GkAppJlJ6MSNvKNo7Hj3Z_I3QTbiwzOtyOJbh6jcZ0U", alt: "",
    titulo: "Título - 6"
  }
  const card7 = {
    imgSrc: "https://i.picsum.photos/id/773/200/200.jpg?hmac=0hv9IpliWL2N0sAasWERqujU16tTk6K20nep2Q2P1Bk", alt: "",
    titulo: "Título - 7"
  }
  const card8 = {
    imgSrc: "https://i.picsum.photos/id/110/200/200.jpg?hmac=aekmsQTsPRt4hCd1khMC5QVihAaBeTigUCpcDBzhXlY", alt: "",
    titulo: "Título - 8"
  }
  const usuario1 = {
    nome: "Labenu",
    imgSrc: imgUsuario1,
    alt: "Foto de Perfil",
  }

  const usuario2 = {
    nome: "Conway",
    imgSrc: imgUsuario2,
    alt: "Foto de Perfil",
  }
  const usuario3 = {
    nome: "Larissa",
    imgSrc: "https://i.picsum.photos/id/237/200/200.jpg?hmac=zHUGikXUDyLCCmvyww1izLK3R3k8oRYBRiTizZEdyfI",
    alt: "Foto de Perfil",
  }
  const usuario4 = {
    nome: "Prof",
    imgSrc: imgUsuario4,
    alt: "Foto de Perfil",
  }
  const usuario5 = {
    nome: "Prof",
    imgSrc: imgUsuario5,
    alt: "Foto de Perfil",
  }

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo card={card1} usuario = {usuario5}/>
            <CardVideo card={card2} usuario = {usuario2}/>
            <CardVideo card={card3} usuario = {usuario4}/>
            <CardVideo card={card4} usuario = {usuario5}/>
            <CardVideo card={card5} usuario = {usuario1}/>
            <CardVideo card={card6} usuario = {usuario3}/>
            <CardVideo card={card7} usuario = {usuario4}/>
            <CardVideo card={card8} usuario = {usuario1}/>    
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}