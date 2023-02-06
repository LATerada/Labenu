import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal
} from "./styled";
import bin from "../../assets/bin.png";
import { ListaTarefasFeitas } from "./ListaTarefasFeitas/ListaTarefasFeitas";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [listaTarefaConcluida,setListaTarefaConcluida] = useState([])

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const enterTarefa = (event) => {
    if(event.key === "Enter"){
      adicionaTarefa();
    }
  }
  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const removeTarefa = (index, tarefafeita) => {
    const listaFiltrada = lista.filter((item,indice) => indice !== index);

    // const listaTarefaConcluida2 = lista.filter((item,indice)=> indice === index )
    // setListaTarefaConcluida([...listaTarefaConcluida, listaTarefaConcluida2])
    // console.log(listaTarefaConcluida)
    
    // ESTA RESOLUCAO NAO ESTA 100%, POR DEPENDER DO ESTADO
    // for(let tarefa of lista){
    //     if(listaFiltrada.includes(tarefa) === false ){
    //       console.log(tarefa)
    //       const listaTarefaConcluida2 = [...listaTarefaConcluida, tarefa]
    //       console.log({lista,listaFiltrada,listaTarefaConcluida})
    //       setListaTarefaConcluida(listaTarefaConcluida2)
    //     }
    // }

    console.log({lista,listaFiltrada,listaTarefaConcluida})
    const listaTarefaConcluida2 = [...listaTarefaConcluida, tarefafeita]
    setListaTarefaConcluida(listaTarefaConcluida2)
    
    setLista(listaFiltrada);
  }

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyPress={enterTarefa}
        />
        <AddTaskButton  onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(index,tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal/>
      <ListaTarefasFeitas listaTarefaConcluida={listaTarefaConcluida} />
    </ListaTarefasContainer>
  );
}
