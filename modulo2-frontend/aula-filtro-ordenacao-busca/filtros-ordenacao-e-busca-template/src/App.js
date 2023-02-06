import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {
  const [buscaId,setBuscaId] = useState("")
  const [buscaNome,setBuscaNome] = useState("")
  const [ordena,setOrdena] = useState("")

  return (
    <>
      <GlobalStyle />
      <Header
        buscaId={buscaId}
        buscaNome={buscaNome}
        ordena={ordena}
        setBuscaId={setBuscaId}
        setBuscaNome={setBuscaNome} 
        setOrdena={setOrdena}/>
      <CardsContainer>
        {pokemons
        .filter((pokemon) => {
          return pokemon.name.english.toLowerCase().includes(buscaNome.toLowerCase());
        })
        .filter((pokemon) => {
          return(
            buscaId ? pokemon.id === buscaId : pokemon
          )
          // if(buscaId && pokemon.id === buscaId) {
          //   return pokemon
          // }else if(!buscaId){
          //   return pokemon
          // }
        })
        .sort((atual,proximo)=>{
          if(ordena === "Crescente"){
            if(atual.name.english < proximo.name.english){
              return -1;
            }else if (atual.name.english > proximo.name.english){
              return 1;
            }else{
              return 0;
            }
          }else if(ordena === "Decrescente"){
            if(atual.name.english > proximo.name.english){
              return -1;
            }else if (atual.name.english < proximo.name.english){
              return 1;
            }else{
              return 0;
            }
          }
        })
        .map((pokemon) => {
          return <PokemonCard
          cardColor={getColors(pokemon.type[0])}
          key={pokemon.id}
          pokemon={pokemon}
        />
        })}
      </CardsContainer>
    </>
  );
}

export default App;
