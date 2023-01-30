import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import { useState } from "react";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  const [tela,setTela] = useState(1)

  const mudarTela = (t) => setTela(t)

  const renderizaTela = () => {
    switch (tela){
      case 1:
        return(
          <TelaLogin mudarTela = {mudarTela} />
        )
      case 2:
        return(
          <TelaCadastro mudarTela = {mudarTela}/>
        )
      case 3:
        return(
          <TelaUsuarioCadastrado mudarTela = {mudarTela}/>
        )
      default:
        return "Página nāo encontrada."
    }
  }

  return (
    <MainContainer >
      <GlobalStyled />
      {renderizaTela()}
    </MainContainer>
  );
}

export default App;