import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { FormContainer, InputContainer } from "./styled";

function SignUpPage() {
  const { form, onChange } = useForm({ name: "", email:"", password:"" })
  const navigate = useNavigate();
  const body = 
    {
      name: form.name,
      email: form.email,
      password: form.password
    }
    
  const submitSignInForm = (event) => {
    event.preventDefault()
    axios
      .post( "https://api-cookenu.onrender.com/user/signup", body )
      .then((response)=> {
        localStorage.setItem("token", response.data.token)
        console.log(`Logou`)
        goToFeed(navigate)
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  }

  return (
    <main>
      <h1>Cadastro</h1>
      <FormContainer onSubmit={submitSignInForm}>
        <InputContainer>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={onChange}
            required
          />
        </InputContainer>
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

        <button>Cadastrar</button>
        <button type="button" onClick={() => goToLogin(navigate)}>Já sou cadastrado</button>
      </FormContainer>
    </main>
  );
}

export default SignUpPage;