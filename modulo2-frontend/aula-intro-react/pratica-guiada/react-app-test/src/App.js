import "./App.css"
import logo from "./img/logo.png";

function App() {
  const meuNome = "Conway"


  const olaMundo = () => {
    return(
      alert("Olá, Mundo!")
    )
  }

  const h1Text = "Aprenda React na Labenu!"

    const onClickBotao = () => {
        return(
            alert("Botão foi clicado!")
        )
    }

  return (
    <div className="container">
      <h1>Introduçāo ao React</h1>
      <button onClick={olaMundo}className="meu-nome">Clique aqui, {meuNome} </button>
        <h1>{h1Text}</h1>
        <div>
            <div>
                <img className="Logo" src={logo} alt="logo"/>
            </div>
            <div className="tagA" >
                <a href="https://labenu.com.br">Site da Labenu</a>
            </div>
            <div className="button" >
                <button onClick={onClickBotao}> Clique aqui! </button>
            </div>
        </div>
    </div>
  );
}

export default App;
