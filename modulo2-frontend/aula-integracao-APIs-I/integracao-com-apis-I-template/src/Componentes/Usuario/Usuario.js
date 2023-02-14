import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const User = styled.div`
  border: black 1px solid;
  margin-top: 10px;
  width: 350px
`
function Usuario(props) {
  const [usuario, setUsuario] = useState(props.usuario);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [editar, setEditar] = useState(false);

  const headers = {
    headers: {
      Authorization: "larissa-terada-conway"
    }
  }

  const body = {
    name: nome,
    email: email,
  }

  const editarUsuario = () => {
    axios
    .put(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuario.id}`,
      body,
      headers
    ).then((response) => {
      console.log(response);
      recebeUsuariosPorId(usuario.id);
      setEditar(false);
      setEmail("");
      setNome("");
    }).catch((error) => {
      console.log(error.response.data.message)
    })
  }

  const excluirUsuario = (id) =>{
    axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      headers
    ).then(()=> {
      props.recebeUsuarios();
    }).catch((error)=> {
      console.log(error.response)
    })
  }

  const recebeUsuariosPorId = (id) => {
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      headers
      ).then((response)=> {
        setUsuario(response.data)
      }).catch((error) => {
        alert(error.response.data.message)
      })
  }

  useEffect(()=> {
    recebeUsuariosPorId(usuario.id)
  },[])

  return (
    <User>
      {editar ? (
        <div>
          <p>Nome:{usuario.name}</p>
          <p>E-mail:{usuario.email}</p>
          <input value={nome} onChange={(e) => setNome(e.target.value)} />
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={editarUsuario}>Enviar alterações</button>
        </div>
      ) : (
        <>
          <p>Nome:{usuario.name}</p>
          <p>E-mail:{usuario.email}</p>
        </>
      )}
      <button onClick={() => setEditar(!editar)}>Editar</button>
      <button onClick={() => excluirUsuario(usuario.id)}>Excluir</button>
    </User>
  );
}

export default Usuario;
