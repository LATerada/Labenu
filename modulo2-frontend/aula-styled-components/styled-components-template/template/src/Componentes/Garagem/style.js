import styled from "styled-components";

export const Botao = styled.button`
    border: none;
    padding: 8px;
    background-color: orange;

    :hover{
        background-color: white;
    }

`
export const GaragemContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: whitesmoke;
`

export const Estacionamento = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 20px;
    padding: 20px;
    min-height: 75vh;
`
export const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15vh;
    border-bottom: 1px solid black;
`
export const Footer = styled.footer`
    width: 100%;
    height: 5vh;
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
`