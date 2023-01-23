import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton, PokemonImage} from './styles'

const PokemonCard = ({name, type, evolved, weight, color, image, setPokemon, pokemonEvolution}) => {
    const evoluirPokemon = () => {
      evolved ? alert(`Evolved Pokemon`) : setPokemon(pokemonEvolution)
      console.log(pokemonEvolution)
    }
    
  return (
    <Card color={color}>
        <PokemonImage src={image} alt={`Pokemon`}/>
        <PokemonName>{name}</PokemonName>
        <PokemonType>{type}</PokemonType>
        <p>{weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard