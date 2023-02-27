import {Title,NameContainer,PostContainer } from './style'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
import { useRequestData } from './hooks/useRequestData';
// import { BASE_URL } from './constants/constants';

function App() {
  // const [nomeUsuarios, isLoadingUsuarios, errorUsuarios] = useRequestData(`${BASE_URL}users`, [])
  // const [postagens, isLoadingPosts, errorPosts] = useRequestData(`${BASE_URL}comments`, [])

  // exercicio3
  const [nomeUsuarios, isLoadingUsuarios, errorUsuarios] = useRequestData(`https://hp-api.onrender.com/api/characters`, [])
  const [postagens, isLoadingPosts, errorPosts] = useRequestData(`https://hp-api.onrender.com/api/spells`, [])
  const feiticos = []
  postagens.filter((item) => {
    return(
      feiticos.push(item.name)
    )
  })

  return (
    <div>
      <GlobalStyle />
      <Header />
      {/* <Title>Nomes dos usuários</Title> */}
      {/* exercicio3 */}
      <Title>Alunos de Hogwartz</Title>
      <NameContainer>
        { errorUsuarios ? <p>Ocorreu um erro...</p> : 
          isLoadingUsuarios ? <p>carregando...</p> : (
          nomeUsuarios.map((usuario) => {
            return(
            <Card 
            key={usuario.id} 
            text={usuario.name} 
            backgroudColor={'nome'}
            textColor={'nome'}
            />)
            })
            )}

      </NameContainer>

      <hr />
      {/* <Title>Comentários dos usuários</Title>
      <PostContainer>
      { errorPosts ? <p>Ocorreu um erro na requisiçāo...</p> :
        isLoadingPosts ? <p>carregando postagens...</p> : 
        postagens.map((post) => {
          return(
            <Card 
            key={post.id} 
            text={post.body} 
            backgroudColor={'#1dc690'}
            textColor={'#ffffff'}
            />)
        })} */}

      {/* exercicio3 */}
      <Title>Feitiços</Title>
      <PostContainer>
      { feiticos.length === 0 ? <p>nenhum feitiço encontrado...</p> :
        errorPosts ? <p>Ocorreu um erro na requisiçāo...</p> :
        isLoadingPosts ? <p>carregando postagens...</p> : 
        feiticos.map((post) => {
          return(
            <Card 
            key={post} 
            text={post} 
            backgroudColor={'#1dc690'}
            textColor={'#ffffff'}
            />)
        })}
      </PostContainer>
    </div>
  );
}

export default App;



