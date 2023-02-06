import React from "react";
import { Container } from "./styles";

const Header = ({buscaId, buscaNome ,ordena, setBuscaId, setBuscaNome, setOrdena}) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  return (
    <Container>
      <input 
        type="number" 
        placeholder="Buscar por id" 
        value={buscaId}
        onChange={(event) => {
          setBuscaId(event.target.value)
        }}
        />
      <input 
        type="text" 
        placeholder="Buscar por nome" 
        value={buscaNome}
        onChange={(event) => {
          setBuscaNome(event.target.value)
        }}
        />
      <select
        value={ordena}
        onChange={(event) => {
          setOrdena(event.target.value)
        }}
        >
        <option value="">Ordenar</option>
        <option value="Crescente">Crescente</option>
        <option value="Decrescente">Decrescente</option>
      </select>
      <select name="tipo" id="tipo">
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
