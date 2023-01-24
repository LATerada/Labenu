import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {
  const [inputName,setInputName] = useState("");
  const [inputIdade,setInputIdade] = useState("");
  const [inputEmail,setInputEmail] = useState("");
  const [inputSenha,setInputSenha] = useState("");

  const handleInputName = (event) => {
    setInputName(event.target.value);
    console.log(event.target.value);
  };

  const handleInputIdade = (event) => {
    setInputIdade(event.target.value);
    console.log(event.target.value);
  };

  const handleInputEmail = (event) => {
    setInputEmail(event.target.value);
    console.log(event.target.value);
  };

  const handleInputSenha = (event) => {
    setInputSenha(event.target.value);
    console.log(event.target.value);
  };

  const limpar = () => {
    setInputName("");
    setInputIdade("");
    setInputEmail("");
    setInputSenha("");
  }

  const [type ,setType] = useState ("password")

  const changeType = () => {
    if (type === "password"){
      setType("text")
    }
    else{
      setType("password")
    }
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={inputName} onChange={handleInputName} placeholder="digite seu nome" />
        </label>
        <label>
          Idade:
        </label>
          <Input value={inputIdade} onChange={handleInputIdade} type="number" placeholder="digite sua idade"/>
        <label>
          E-mail:
        </label>
          <Input value={inputEmail} onChange={handleInputEmail} type="email" placeholder="digite seu e-mail" />
        <label>
          Senha:
        </label>
          <Input value={inputSenha} onChange={handleInputSenha} type={type} placeholder="crie sua senha" />
          <button onClick={changeType} >Vizualizar / Esconder</button>
      <button onClick={limpar}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
