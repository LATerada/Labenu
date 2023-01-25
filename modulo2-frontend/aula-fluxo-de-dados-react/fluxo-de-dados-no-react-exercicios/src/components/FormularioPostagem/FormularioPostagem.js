import { FormContainer, Form, Input, StyledLabel, SendButton} from "./styled";

export const FormularioCadastro = ({title, image, description , setPost ,setTitle, setImage ,setDescription}) => {
  const sendPost = () => {
    setPost({
      title: title,
      image: image,
      description: description,
    })
  }
  
  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={title} onChange={(event)=> {setTitle(event.target.value)}} />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={image} onChange={(event)=> {setImage(event.target.value)}}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={description} onChange={(event)=> {setDescription(event.target.value)}} />
        </StyledLabel>
        <SendButton onClick={sendPost} ></SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
