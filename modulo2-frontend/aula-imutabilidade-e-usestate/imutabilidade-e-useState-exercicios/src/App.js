import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png',
    id: 0
  })

  // Para fazer seus próximos pokemons, crie novos estados!
  const [pokemon2,setPokemon2]= useState({
    name: "Aipom",
    type: "Normal",
    evolved: false,
    weight: 11,
    color: 'purple',
    image: 'https://archives.bulbagarden.net/media/upload/0/0d/0190Aipom.png',
    id: 2
  })

  const [pokemon3,setPokemon3]= useState({
    name: "Beautifly",
    type: "Bug and Flying",
    evolved: false,
    weight: 28,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/7/73/0267Beautifly.png',
    id: 3
  })

  const [pokemon4,setPokemon4]= useState({
    name: "Lopunny",
    type: "Fighting",
    evolved: true,
    weight: 28,
    color: 'brown',
    image: 'https://archives.bulbagarden.net/media/upload/4/4b/0428Lopunny.png',
    id: 4
  })

  const pokemonEvolution = {
    ...pokemon,
    name: "Pikachu",
    evolved: true,
    weight: 6,
    image: 'https://archives.bulbagarden.net/media/upload/4/4a/0025Pikachu.png',
    id:5
  }

  const pokemon2Evolution = {
    ...pokemon2,
    name: "Ambipom",
    evolved: true,
    weight: 20,
    image: 'https://archives.bulbagarden.net/media/upload/9/9d/0424Ambipom.png',
    id:6
  }

  const pokemon3Evolution = {
    ...pokemon3,
    name: "Silcoon",
    evolved: true,
    weight: 10,
    image:'https://archives.bulbagarden.net/media/upload/9/9d/0266Silcoon.png',
    id:7
  }

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard 
      name= {pokemon.name}
      type={pokemon.type}
      evolved={pokemon.evolved}
      weight= {pokemon.weight}
      color={pokemon.color}
      image={pokemon.image}
      setPokemon={setPokemon}
      pokemonEvolution={pokemonEvolution}
       />
         <PokemonCard 
      name= {pokemon2.name}
      type={pokemon2.type}
      evolved={pokemon2.evolved}
      weight= {pokemon2.weight}
      color={pokemon2.color}
      image={pokemon2.image}
      setPokemon={setPokemon2}
      pokemonEvolution={pokemon2Evolution}
       />
         <PokemonCard 
      name= {pokemon3.name}
      type={pokemon3.type}
      evolved={pokemon3.evolved}
      weight= {pokemon3.weight}
      color={pokemon3.color}
      image={pokemon3.image}
      setPokemon={setPokemon3}
      pokemonEvolution={pokemon3Evolution}
       />
         <PokemonCard 
      name= {pokemon4.name}
      type={pokemon4.type}
      evolved={pokemon4.evolved}
      weight= {pokemon4.weight}
      color={pokemon4.color}
      image={pokemon4.image}
      setPokemon={setPokemon4}
       />
      {/* Crie aqui seus próximos pokemons! */}
    </FlexContainer>
  </>
    
  );
}

export default App;
