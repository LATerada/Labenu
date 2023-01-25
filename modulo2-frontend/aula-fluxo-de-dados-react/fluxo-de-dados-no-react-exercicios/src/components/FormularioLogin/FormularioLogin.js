import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = ( {setPageFlow, name, url, setProfile, setName, setUrl}) => {

  const login = () => {
    setProfile({
      name: name,
      url: url,
    })
    setPageFlow(2);
  };
  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} value={name} onChange={(event)=> {setName(event.target.value)}} />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} value={url} onChange={(event) => {setUrl(event.target.value)}} />
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
