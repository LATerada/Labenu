import React, { useState } from "react";
import axios from "axios";

function AddUsuario(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const headers = {
    headers: {
      Authorization: "larissa-terada-conway"
    }
  }

  const body = {
    name: nome,
    email: email
  }

  const adicionarUsuario = () => {
    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", 
      body,
      headers
      ).then(() => {
        props.recebeUsuarios();
        setNome("");
        setEmail("")
      }).catch((error) => {
        alert(error.response.data.message)
      })
  }

  return (
    <>
      <p>Adicionar novo usuario</p>
      <input
        placeholder={"nome"}
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder={"email"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={adicionarUsuario}>Enviar</button>
    </>
  );
}

export default AddUsuario;
