
import { ListaTarefasFeitasContainer, TarefaFeita } from "./styles";

export function ListaTarefasFeitas({listaTarefaConcluida}) {
    return(
        <ListaTarefasFeitasContainer>
            <ul>
            {listaTarefaConcluida.map((tarefa, index) => {
                return (
                <TarefaFeita key={index}>
                    <p>{tarefa}</p>
                </TarefaFeita>
                );
            })}
            </ul>
        </ListaTarefasFeitasContainer>
    )

}