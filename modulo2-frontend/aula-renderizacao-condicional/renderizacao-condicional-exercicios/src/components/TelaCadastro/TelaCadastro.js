import { useState } from "react";
import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

function TelaCadastro(props) {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [passwordConfirmation,setPasswordConfirmation] = useState("")

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handlePasswordConfirmation = (event) => {
    setPasswordConfirmation(event.target.value)
  }

  return (
    <FormContainer>
      <h1>Cadastro </h1>
      <Form>
        <StyledLabel htmlFor="nome">
          Nome:
          <Input id="nome" value={name} onChange={handleName} />
        </StyledLabel>
        <StyledLabel htmlFor="emailCadastro">
          E-mail:
          <Input id="emailCadastro" value={email} onChange={handleEmail} />
        </StyledLabel>
        <StyledLabel htmlFor="senha">
          Senha:
          <Input id="senha" value={password} onChange={handlePassword} />
        </StyledLabel>
        <StyledLabel htmlFor="confirmacaoSenha">
          Confirmação da senha:
          <Input id="confirmacaoSenha" value={passwordConfirmation} onChange={handlePasswordConfirmation}  />
        </StyledLabel>
        <SendButton onClick={() => {props.mudarTela(3)}}>Próximo</SendButton>
        <BackToLoginButton onClick={() => props.mudarTela(1)}>Já possuo um cadastro</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;
