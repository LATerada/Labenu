import React from 'react'
import { useForm } from '../../hooks/useForm'
import { MainContainer, Form, Input } from './styles'

function MainPage() {
  const { form, onChangeForm, resetForm } = useForm({ nome:"", modulos:"", tecnologias:"", responsavel:"" })

  const handleClick = (event) => {
    event.preventDefault()
    console.log(form)
    resetForm()
  }

  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input 
          id="nome"
          name="nome"
          type="text"
          value={form.nome}
          placeholder="ex: React Básico"
          onChange={onChangeForm}
          required
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input 
          id="modulos"
          name="modulos"
          // type="number"
          // min={2}
          pattern="^(0*[2-9]|[1-9][0-9]+)$"
          title="Mínimo 2 módulos"
          placeholder="ex: 2"
          value={form.modulos}
          onChange={onChangeForm}
          required
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input 
          id="tecnologias"
          name="tecnologias"
          type="text"
          placeholder="ex: JavaScript"
          value={form.tecnologias}
          onChange={onChangeForm}
          required
        />
        
        <label htmlFor="responsavel">Responsável: </label>
        <Input 
          id="responsavel"
          name="responsavel"
          type="text"
          // pattern="[A-Za-z]{5}"
          // pattern="^.\p{L}[^0-9@~`!@#$%^&*()_=+\\';:\/?>.<,-]{5,}$"
          pattern="^[\p{L}\s]{5,}$"
          title="Cinco ou mais caracteres"
          placeholder="ex: AstroDev"
          value={form.responsavel}
          onChange={onChangeForm}
          required
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
