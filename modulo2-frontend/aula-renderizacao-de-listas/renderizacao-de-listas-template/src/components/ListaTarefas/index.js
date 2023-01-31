import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista,setLista] = useState(["Limpar","Arrumar","Estudar"])

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    // const novaLista = [...lista]
    // novaLista.push(novaTarefa)
    // setLista(novaLista)

    setLista([...lista, novaTarefa])
    setNovaTarefa("")
  };

  const removeTarefa = (taskindice) => {
    const listaFiltrada = lista.filter((task,indice)=> indice !== taskindice);
    setLista(listaFiltrada);
    console.log(lista)
  };

  // const renderizarLista = 
  // lista.map((elemento) => {
  //   return(
  //     <Tarefa>
  //     <p>{elemento}</p>
  //     <RemoveButton>
  //       <img src={bin} alt="" width="16px" />
  //     </RemoveButton>
  //   </Tarefa>
  //   )
  // })

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          {/* {renderizarLista} */}
          {lista.map((item,indice)=>{
            return(
              <Tarefa key={indice}>
              <p>{indice + 1}-{item}</p>
              <RemoveButton onClick={() => removeTarefa(indice)}>
                <img src={bin} alt="" width="16px" />
              </RemoveButton>
            </Tarefa>
            )
          })}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}