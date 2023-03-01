import axios from "axios";
import useForm from "../hooks/useForm";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { Form, FormContainer, Input, LoginButton } from "./styleCreateTripPage";

function CreateTripPage() {

    const { form , onChange} = useForm()

    const submitForm = (event) => {
        const token = localStorage.getItem("token")
        const headers = 
            {
                headers: 
                {
                    auth: token
                }
            }
        const body =
            {
                name: form.nome,
                planet: form.planeta,
                date: form.data,
                description: form.descricao,
                durationInDays: form.duracao
            }
    
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/larissa/trips", body ,  headers)
        .then(() => {
            console.log(`Formulário enviado`)
        })
        .catch(error => {
            console.log(error.response)
        })
        event.preventDefault();
        console.log(form)
    };

    useProtectedPage()

    return (
        <FormContainer>

            <h1>Criar Viagem</h1>
            <Form onSubmit={submitForm}>
                <label htmlFor="nome">Nome</label>
                <Input
                    id="nome"
                    name="nome"
                    value={form.nome}
                    placeholder="Nome da Viagem"
                    onChange={onChange}
                    required
                />
                <label htmlFor="planeta">Planeta</label>
                <Input
                    id="planeta"
                    name="planeta"
                    value={form.planeta}
                    placeholder="Planeta"
                    onChange={onChange}
                    required
                />
                <label htmlFor="data">Data</label>
                <Input
                    id="data"
                    name="data"
                    value={form.data}
                    type='date'
                    placeholder="data"
                    onChange={onChange}
                    required
                />
                <label htmlFor="descricao">Descricao</label>
                <Input
                    id="descricao"
                    name="descricao"
                    value={form.descricao}
                    placeholder="Descrição da viagem: ao menos 30 caracteres"
                    pattern="/^([A-Za-z]\s?){30,}$\g"
                    onChange={onChange}
                    required
                />
                <label htmlFor="duracao">Duração</label>
                <Input
                    id="duracao"
                    name="duracao"
                    value={form.duracao}
                    type="number"
                    placeholder="Duração da viagem em dias"
                    onChange={onChange}
                    required
                />
                <LoginButton>Criar Viagem </LoginButton>
            </Form>
        </FormContainer>
    );
}

export default CreateTripPage;
