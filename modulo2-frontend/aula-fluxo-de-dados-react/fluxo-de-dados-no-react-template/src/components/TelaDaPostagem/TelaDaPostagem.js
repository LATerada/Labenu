import React from 'react'
import {ContainerPostagem, Image, Description, Titulo} from './styles'

const TelaDaPostagem = (props) => {
  return (
    <ContainerPostagem>
            <Image src={props.foto} alt='Image'/>
            <Titulo>{props.titulo}</Titulo>
            <Description>{props.descricao}</Description>
    </ContainerPostagem>
  )
}

export default TelaDaPostagem