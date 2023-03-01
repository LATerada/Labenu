import React from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToSignUp } from "../../routes/coordinator.js";
import { FormContainer, InputContainer } from "./styled.js";
import axios from "axios";
import { useForm } from "../../hooks/useForm.js";
import { baseURL } from "../../constants/baseURL.js";


function LoginPage() {
  const { form, onChange } = useForm({ email: "", password: ""})
  const navigate = useNavigate();
  const body = 
    {
      email: form.email,
      password: form.password
    }

  const submitForm = (event) => {
    event.preventDefault()
    axios
      .post( `${baseURL}/user/login`, body )
      .then((response) => {
        localStorage.setItem("token" , response.data.token)
        console.log(`Logou`)
        goToFeed(navigate)
      })
      .catch(error => {
        console.log(error.response.data.message)
      })
  }
 
  return (
    <main>
      <h1>Login</h1>
      <FormContainer onSubmit={submitForm}>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={onChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            name="password"
            value={form.password}
            onChange={onChange}
            required
          />
        </InputContainer>
        <button>Entrar</button>
        <button type="button" onClick={() => goToSignUp(navigate)}>Não tenho cadastro</button>
      </FormContainer>
    </main>
  );
}

export default LoginPage;
