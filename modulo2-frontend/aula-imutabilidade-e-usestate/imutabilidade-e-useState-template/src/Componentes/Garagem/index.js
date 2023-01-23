import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'
import { useState } from 'react';

export function Garagem({ nome }) {
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

  const car1 = {
    cor:"Preto",
    ano:2015,
    flex: false,
    adicionadoPor:"Larissa",
    modelo: "WRV"
  }

  const car2 = {
    cor:"Preto",
    ano:2017,
    flex: false,
    adicionadoPor:"Larissa",
    modelo: "HB20"
  }

  const car3 = {
    cor:"Preto",
    ano:2010,
    flex: false,
    adicionadoPor:"Larissa",
    modelo: "NEW BEATLE"
  }

  const[carro2,setCarro2] = useState({car1})

  const[carro3,setCarro3] = useState({car2})

  const[carro4,setCarro4] = useState({car3})

  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={mudaNome} >Muda nome</Botao>

      <Estacionamento>
        <Carro
          modelo={carro.modelo}
          cor={carro.cor}
          ano={carro.ano}
          adicionadoPor={carro.adicionadoPor}
          flex={carro.flex}
          setCarro = {setCarro}
          automovel={automovel}
        />
        <Carro
          modelo={carro2.modelo}
          cor={carro2.cor}
          ano={carro2.ano}
          adicionadoPor={carro2.adicionadoPor}
          flex={carro2.flex}
          setCarro = {setCarro2}
          automovel={carro}
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
          automovel={automovel}
        />
      </Estacionamento>
    </GaragemContainer>
  )
}
