import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome = "Conway";

  const apresentaGaragem = (nomeNaGaragem) => {
    alert(`Boas vindas à garagem de ${nomeNaGaragem}`)
  };

  const carro1 = {
    nome: "Gol",
    cor: "Branco",
    ano: 2015,
    flex: true,
  };

  const carro2 = {
    nome: "Fusca",
    cor: "Azul",
    ano: 1989,
    flex: false,
  };

  const carro3 = {
    nome: "HB20",
    cor: "Preto",
    ano: 2017,
    flex: true,
  };

  const carro4 = {
    nome: "Tiida",
    cor: "Prata",
    ano: 2015,
    flex: true,
  };

  const carro5 = {
    nome: "HRV",
    cor: "Prata",
    ano: 2022,
    flex: true,
  };

  const carro6 = {
    nome: "Tiggo",
    cor: "Prata",
    ano: 2021,
    flex: true,
  };

  const carro7 = {
    nome: "New Beatle",
    cor: "Preto",
    ano: 2010,
    flex: true,
  };

  return (
    <div>
      <Garagem 
      nome = {nome} 
      apresentaGaragem ={apresentaGaragem} 
      carro1 = {carro1} 
      carro2 = {carro2}
      carro3 = {carro3}
      carro4 = {carro4}/>
      <Garagem 
      nome = "Larissa" 
      apresentaGaragem ={apresentaGaragem} 
      carro1 = {carro5}
      carro2 = {carro6}
      carro3 = {carro7}
      carro4 = {carro7}
      />
    </div>
  );
}
