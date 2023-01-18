import Carro from "./Carro";

function Garagem(props) {
  console.log(props)
  return (
    <div>
      <h1>Garagem de {props.nome}</h1>
      <button onClick = {() => props.apresentaGaragem(props.nome)}>Apresentar a garagem</button>
      <Carro carro = {props.carro1}/>
      <Carro carro = {props.carro2}/>
      <Carro carro = {props.carro3}/>
      <Carro carro = {props.carro4}/>
    </div>
  );
}

export default Garagem;