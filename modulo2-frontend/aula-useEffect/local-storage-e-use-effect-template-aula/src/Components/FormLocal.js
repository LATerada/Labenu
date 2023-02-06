import React, { useEffect, useState } from "react";
import { Form } from "./style";

export default function FormLocal() {
    const [nome, setNome] = useState("");
    const [tarefa, setTarefa] = useState("");
    const [listaTarefa, setListaTarefa] = useState([]);
    const [contador, setContador] = useState(0)

    const armazenaNome = () => {
        localStorage.setItem("guardou",nome)
    }

    const recebeNome = () => {
        const nomeRecebido = localStorage.getItem("guardou")
        alert(nomeRecebido)
    }

    const adicionarTarefa = () => {
        const novaLista = [...listaTarefa, tarefa]
        setListaTarefa(novaLista)
    }

    const armazenarTarefa = () => {
        const listaString = JSON.stringify(listaTarefa)
        localStorage.setItem("lista", listaString)
    }

    const acessaTarefa = () => {
        const listaAcessadaString = localStorage.getItem("lista")
        const listaAcessada = JSON.parse(listaAcessadaString)
        if(listaAcessada){
            setListaTarefa(listaAcessada);
        }
    }

    useEffect(() => {
        acessaTarefa();
    }, []);

    const adicionarUm = () => {
        const soma = contador + 1
        setContador(soma)
    }

    const diminuirUm = () => {
        const subtracao = contador - 1
        setContador(subtracao)
    }

    useEffect(()=> {
        if(contador){
            localStorage.setItem("contador", contador);
        }
    },[contador]);

    useEffect(() => {
        const contadorTela = JSON.parse(localStorage.getItem("contador")) //localStorage.getItem("contador")
        // const contadorNumber = JSON.parse(contadorTela)
        if(contadorTela){
            setContador(contadorTela) 
        }//contadorNumber
    },[]);

    return (
        <Form>
            <h3>Prática 1</h3>
            <label htmlFor="nome">
                nome:
                <input name="nome" id="nome" value={nome} onChange={(event) => {setNome(event.target.value)}} />
            </label>
            <div>
                <button onClick={armazenaNome}>Guardar Dados</button>
                <button onClick={recebeNome}>Acessar Dados</button>
            </div>
            <br />
            <h3>Prática 2</h3>
            <label htmlFor="tarefa">
                tarefa:
                <input name="tarefa" id="tarefa" value={tarefa} onChange={(event) => {setTarefa(event.target.value)}}/>
            </label>
            <button type="button" onClick={adicionarTarefa} >adicionar Tarefa</button>
            <ul>
                {listaTarefa.map((task) => {
                    return <li key={task}>{task}</li>;
                })}
            </ul>
            <div>
                <button onClick={armazenarTarefa}>Guardar tarefa</button>
                <button onClick={acessaTarefa}>Acessar tarefa</button>
            </div>
            <span>
            <button 
            onClick={diminuirUm}>-</button>
            {contador}
            <button
             onClick={adicionarUm}>+</button>
            </span>

        </Form>
    );
}