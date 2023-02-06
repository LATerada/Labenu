import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

function App() {
  const [tarefas, setTarefa] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const listaString = JSON.stringify(tarefas);
    if(tarefas.length > 0){
      localStorage.setItem("tarefa",listaString);
    }
  },[tarefas]);

  useEffect(() => {
    const listaString = localStorage.getItem("tarefa");
    if(listaString){
      const arrayTarefas = JSON.parse(listaString);
      setTarefa(arrayTarefas)
    }
  },[]);

  const onChangeInput = (event) => {
    setInputValue(event.target.value)
    console.log(inputValue);
  }

  const criaTarefa = (inputValue) => {
    const novaTarefa = {
      id: Date.now(), // aqui, pode deixar o valor Date.now() para todas as tarefas as serem criadas
      texto: inputValue,// aqui, o texto da tarefa virá do input controlado guardado no estado
      completa: false // aqui, pode deixar o valor false para todas as tarefas as serem criadas, pq a tarefa sempre vai começar como não completa.
    }
    const novaLista = [...tarefas, novaTarefa]
    setTarefa(novaLista)
    console.log(tarefas)
  }

  const selectTarefa = (id) => {
    const novaTarefa = tarefas.map((tarefa)=>{
      if(tarefa.id === id ){
        tarefa.completa = !tarefa.completa;
      }return tarefa
    })
    setTarefa(novaTarefa)
    console.log(tarefas);
  }

  const onChangeFilter = (event) => {
    setFiltro(event.target.value)
    console.log(filtro)
  }

  const listaFiltrada = tarefas.filter((tarefa) => {
    switch (filtro) {
      case 'pendentes':
        return !tarefa.completa
      case 'completas':
        return tarefa.completa
      default:
        return true
    }
  });
  console.log(listaFiltrada)

  return (
    <div className="App">
      <h1>Lista de tarefas</h1>
      <InputsContainer>
        <input value={inputValue} onChange={onChangeInput} />
        <button onClick={() => criaTarefa(inputValue)}>Adicionar</button>
      </InputsContainer>
      <br />

      <InputsContainer>
        <label>Filtro</label>
        <select value={filtro} onChange={onChangeFilter}>
          <option value="">Nenhum</option>
          <option value="pendentes">Pendentes</option>
          <option value="completas">Completas</option>
        </select>
      </InputsContainer>
      <TarefaList>
        {listaFiltrada.map(tarefa => {
          return (
            <Tarefa key={tarefa.id}
              completa={tarefa.completa}
              onClick={() => selectTarefa(tarefa.id)}
            >
              {tarefa.texto}
            </Tarefa>
          )
        })}
      </TarefaList>
    </div>
  )
}


export default App
