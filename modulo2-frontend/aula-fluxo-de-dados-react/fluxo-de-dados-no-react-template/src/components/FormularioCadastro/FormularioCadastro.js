import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = (props) => {
  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.foto} onChange={(event) => {props.setFoto(event.target.value)}} />
        </StyledLabel>
        <StyledLabel htmlFor="titulo">
          Título:
          <Input id="titulo" value={props.titulo} onChange={(event) => {props.setTitulo(event.target.value)}}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={props.descricao} onChange={(event) => {props.setDescricao(event.target.value)}}/>
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro