import { useState } from "react";
import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";

function TelaLogin(props) {
  const [email,setEmail] = useState("")
  const [senha,setSenha] = useState("")

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleSenha = (event) => {
    setSenha(event.target.value)
  }

  const enviarLogin = () => {
    if(email !== ""){
      if(senha !== ""){
        alert("Login feito com sucesso")
      }else{
        alert("Será necessária a senha para fazer o cadastro!")
      }
    }else{
      alert("E-mail não encontrado, será necessário fazer o cadastro!")
    }
  }

  return (
    <FormContainer >
      <h1>LOGIN</h1>
      <Form>
        <StyledLabel htmlFor="email">E-mail:
          <Input id="email" value={email} onChange={handleEmail}/>
        </StyledLabel>
        <StyledLabel htmlFor="senha">Senha:
          <Input id="senha" type={"password"} value={senha} onChange={handleSenha}/>
        </StyledLabel>
        <SendButton onClick={enviarLogin}>Entrar</SendButton>
        <RegisterButton onClick={() => props.mudarTela(2)}>Cadastre-se</RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;