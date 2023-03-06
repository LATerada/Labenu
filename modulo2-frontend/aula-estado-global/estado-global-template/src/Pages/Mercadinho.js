import React from "react";
import { useNavigate } from "react-router-dom";
import { handleCart,handleForm } from "../Router/cordinator";
import CardFrutas from "../components/CardFrutas";
import styled from "styled-components";

export default function Mercadinho({ frutas, carrinho, setCarrinho }) {
    const navigate = useNavigate();
    console.log(frutas)

    function comprar(id) {
        const i = carrinho.findIndex((item) => item.id === id);
        console.log(i);
        if (i !== -1) {
          carrinho[i] = { ...carrinho[i], amount: carrinho[i].amount + 1 };
        } else {
          const frutaEncontrada = frutas.find((fruta) => fruta.id === id);
          const novaFruta = { ...frutaEncontrada, amount: 1 };
          const novaLista = [...carrinho, (carrinho[1] = novaFruta)];
          setCarrinho(novaLista);
        }
    }
    console.log(carrinho)

return (
    <MercadinhoContainer>
        <h1>Mercadinho</h1>
        <button onClick={() => handleCart(navigate)}>Vá para Carrinho </button>
        <button onClick={() => handleForm(navigate)} >Cadastro de Frutas </button>
        <FrutasContainer>
            {frutas.map((fruta) => {
                return(
                    <CardFrutas key={fruta.id} 
                        image={fruta.url}
                        name={fruta.name}
                        price={fruta.price}
                        id={fruta.id} 
                        comprar={() => comprar(fruta.id)} />
                )
            })}
        </FrutasContainer>
    </MercadinhoContainer>
);
}
const FrutasContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
const MercadinhoContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
