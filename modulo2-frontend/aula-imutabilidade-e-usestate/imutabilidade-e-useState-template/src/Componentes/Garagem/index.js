import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'
import { useState } from 'react';

export function Garagem({ nome, mudaNome }) {
  const [carro,setCarro] = useState({
    cor:"rosa",
    ano:1993,
    flex: false,
    adicionadoPor:"Conway",
    modelo: "Fusca"
  });

  const automovel = {
    modelo:"Fiesta",
    cor:"Prata",
    ano:2002,
    adicionadoPor: "Clara",
    flex: true,
  };

  const[carro2,setCarro2] = useState({
      modelo: "WRV",
      cor:"Preto",
      ano:2015,
      adicionadoPor:"Larissa",
      flex: false,
  })

  const[carro3,setCarro3] = useState({
    modelo: "HB20",
    cor:"Preto",
    ano:2017,
    adicionadoPor:"Larissa",
    flex: false,
  })

  const[carro4,setCarro4] = useState({
    modelo: "NEW BEATLE",
    cor:"Preto",
    ano:2010,
    adicionadoPor:"Larissa",
    flex: false,
  })

  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={() => mudaNome()} >Muda nome</Botao>

      <Estacionamento>
        <Carro
          modelo={carro.modelo}
          cor={carro.cor}
          ano={carro.ano}
          adicionadoPor={carro.adicionadoPor}
          flex={carro.flex}
          setCarro = {setCarro}
          automovel={carro4}
        />
        <Carro
          modelo={carro2.modelo}
          cor={carro2.cor}
          ano={carro2.ano}
          adicionadoPor={carro2.adicionadoPor}
          flex={carro2.flex}
          setCarro = {setCarro2}
          automovel={carro3}
        />
        <Carro
          modelo={carro3.modelo}
          cor={carro3.cor}
          ano={carro3.ano}
          adicionadoPor={carro3.adicionadoPor}
          flex={carro3.flex}
          setCarro = {setCarro3}
          automovel={automovel}
        />
         <Carro
          modelo={carro4.modelo}
          cor={carro4.cor}
          ano={carro4.ano}
          adicionadoPor={carro4.adicionadoPor}
          flex={carro4.flex}
          setCarro = {setCarro4}
          automovel={carro2}
        />
      </Estacionamento>
    </GaragemContainer>
  )
}
