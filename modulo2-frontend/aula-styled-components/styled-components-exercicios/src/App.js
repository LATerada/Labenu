import React from "react";
import CardVideo from "./Componentes/CardVideo";
import { GlobalStyle } from "./GlobalStyle";
import { Footer, FullContainer, Header, Main, Nav, PainelVideos } from "./style";
import "./styles.css";

export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <div>
      <GlobalStyle/>
      <FullContainer>
        <Header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </Header>

        <Main>
          <Nav>
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </Nav>

          <PainelVideos>
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </PainelVideos>
        </Main>

        <Footer>
          <h4>Oi! Eu moro no footer!</h4>
        </Footer>
      </FullContainer>

    </div>
  );
}
