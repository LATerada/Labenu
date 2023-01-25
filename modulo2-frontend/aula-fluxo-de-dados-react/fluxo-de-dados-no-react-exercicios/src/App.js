import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);

  const [name,setName] = useState("");
  const [url,setUrl] = useState("");

  const [title,setTitle] = useState("");
  const [image,setImage] = useState("");
  const [description,setDescription] = useState("");

  const [profile,setProfile] = useState({})

  const [post,setPost] = useState({
    title: "",
    image: "",
    description: "",
  })

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header profile={profile}/>
          {pageFlow === 1 ? (
          <FormularioLogin 
              setPageFlow={setPageFlow} 
              profile={profile} 
              name={name} 
              url={url} 
              setProfile={setProfile}
              setName={setName} 
              setUrl={setUrl}
            />
          ) : (
          <FormularioPostagem 
              post={post}  
              title={title} 
              image={image} 
              description={description} 
              setPost={setPost}
              setTitle={setTitle} 
              setImage={setImage} 
              setDescription={setDescription}
              />
          )}
        </aside>
        <TelaDaPostagem post={post}/>
      </Container>
    </>
  );
}

export default App;

