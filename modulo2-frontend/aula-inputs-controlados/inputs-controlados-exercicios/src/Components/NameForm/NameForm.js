import React from 'react'
import { Form, Input} from '../MainPage/styles'

const NameForm = ( {name, age, email, emailConfirmation, changeName , changeAge , changeEmail , changeEmailConfirmation ,sendData }) => {
  return (
    <Form>
        <label>
          Nome:
          <Input  placeholder="Nome" value={name} onChange={changeName} minLength="10" maxLength="30" required/>
        </label>
        <label>
          Idade:
          <Input  placeholder="Idade" value={age} onChange={changeAge} type="number" required/>
        </label>
        <label>
          E-mail:
          <Input  placeholder="usuario@usuario.com" value={email} onChange={changeEmail} required/>
        </label>
        <label>
          Confirmação de e-mail:
          <Input  placeholder="usuario@usuario.com" value={emailConfirmation} onChange={changeEmailConfirmation} required/>
        </label>
      <button onClick={sendData}>Enviar dados</button>
    </Form>
  )
}

export default NameForm;