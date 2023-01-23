import { Garagem } from './Componentes/Garagem'
import { GlobalStyled } from './GlobalStyled'
import { useState } from 'react'

export default function App() {
  const [nome,setNome] = useState("Labenu")
  const mudaNome = () => {
    setNome("Conway")
  }
  return (
    <div className="App">
      <GlobalStyled />

      <Garagem nome="Labenu" mudaNome={mudaNome}/>
    </div>
  )
}
