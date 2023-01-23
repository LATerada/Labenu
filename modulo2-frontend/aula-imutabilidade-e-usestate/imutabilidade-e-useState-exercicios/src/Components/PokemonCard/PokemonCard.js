import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'



const PokemonCard = (props) => {

    const evoluirPokemon = () => {
        console.log("Cliquei no botão de evoluir")
    }
    
  return (
    <Card color={}>
        <img src={} alt={`Pokemon`}/>
        <PokemonName>{}</PokemonName>
        <PokemonType>{}</PokemonType>
        <p>{}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard