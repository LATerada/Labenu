import { useState } from 'react'
import { CarroContainer } from './styles'

export function Carro({ modelo, cor, ano, flex, adicionadoPor , setCarro, automovel}) {
  return (
    <CarroContainer>
      <h2>{modelo}</h2>
      <ul>
        <li>Cor: {cor}</li>
        <li>Ano: {ano}</li>
        <li>Flex: {flex ? 'Sim' : 'Não'}</li>
        <li>Adicionado: {adicionadoPor}</li>
      </ul>
      <button onClick={() => setCarro(automovel)} > Muda carro </button>
    </CarroContainer>
  )
}
