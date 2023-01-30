import { useState } from "react";
import { Form, FormContainer, Input, SendButton, StyledLabel } from "./styled";

function TelaCadastroEndereco(props){
  const [endereco,setEndereco] = useState("")
  const [numero,setNumero] = useState("")
  const [telefone, setTelefone] = useState("")
  const [complemento,setComplemento] = useState("")

  const handleEndereco = (event) => {
    setEndereco(event.target.value)
  }

  const handleNumero = (event) => {
    setNumero(event.target.value)
  }

  const handleTelefone = (event) => {
    setTelefone(event.target.value)
  }

  const handleComplemento = (event) => {
    setComplemento(event.target.value)
  }

    return(
        <FormContainer >
        <h1>Cadastro Endereço</h1>
        <Form>
          <StyledLabel>Endereço:
            <Input value={endereco} onChange={handleEndereco} />
          </StyledLabel>
          <StyledLabel>Número:
            <Input value={numero} onChange={handleNumero} />
          </StyledLabel>
          <StyledLabel>Telefone:
            <Input value={telefone} onChange={handleTelefone} />
          </StyledLabel>
          <StyledLabel>Complemento:
            <Input value={complemento} onChange={handleComplemento}/>
          </StyledLabel>
          <SendButton onClick={() => props.mudarTela(4)} >Concluir Cadastro</SendButton>
        </Form>
      </FormContainer>
    )
};

export default TelaCadastroEndereco;
