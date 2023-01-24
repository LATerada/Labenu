import React, { useState } from 'react'
import { Form, Input, InputSelect} from '../MainPage/styles'

const ConfirmationForm = ( {name, age, email}) => {
  const [date, setDate] = useState("");
  const [tel,setTel] = useState("");
  const [color,setColor] = useState("");

  const changeDate = (event)=> {
    setDate(event.target.value)
  }

  const changeTel = (event) => {
    setTel(event.target.value)
  }

  const changeColor = (event) =>{
    setColor(event.target.value)
  }

  const sendFullData = () => {
    if(date !== ""){
      if(tel.length > 7){
        if(color !== ""){
          alert(`Sua inscriçāo foi finalizada`)
        }
      }else{
        alert(`Insira um telefone válido`)
      }
    }else{
      alert(`Preencher data de nascimento`)
    }
    setDate("");
    setTel("");
    setColor("");
  };

  return (
    <Form>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      <p>E-mail: {email}</p>
      <label>
        Data de Nascimento:
        </label>
      <Input placeholder='Digite a sua data de nascimento' type="date" value={date} onChange={changeDate} required />

      <label>
        Telefone:
        </label>
      <Input placeholder="Digite seu Telefone" type="tel"  value={tel} onChange={changeTel} required/>

      <label>
        Autodeclaraçāo:
        </label>
        <InputSelect value={color} onChange={changeColor} required >
          <option value="">--Escolha uma opçāo--</option>
          <option >Negro</option>
          <option >Branco</option>
          <option >Pardo</option>
          <option >Amarelo</option>
          <option >Indígena</option>
          <option >Prefiro não dizer</option>
        </InputSelect>

      <button onClick={sendFullData} >Enviar dados</button>
      </Form>
  )
}

export default ConfirmationForm