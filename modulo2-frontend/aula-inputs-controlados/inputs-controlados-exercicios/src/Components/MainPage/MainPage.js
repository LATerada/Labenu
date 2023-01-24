import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
const [name, setName] = useState("");
const [age, setAge] = useState("");
const [email, setEmail] = useState("");
const [emailConfirmation, setEmailConfirmation] = useState("");
const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

const changeName = (event) => {
  setName(event.target.value)
};

const changeAge = (event) => {
  setAge(event.target.value)
};

const changeEmail = (event) => {
  setEmail(event.target.value)
};

const changeEmailConfirmation = (event) => {
  setEmailConfirmation(event.target.value)
};

const sendData = () => {
  //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos

    if(name.length > 9){
      if( age > 17){
        if (email.includes("@") && email.includes(".com")){
            if(email === emailConfirmation){
              setFormFlow(2)
            }else{
              alert(`E-mails diferentes`)
            }
          }else{
            alert(`Insira um e-mail válido`)
          }
        }else{
          alert(`Precisa ser maior de 18 anos`)
        }
      }else{
        alert(`Nome com no mínimo 10 caracteres`)
      }
    };
    
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
      name = {name}
      age = {age}
      email = {email}
      emailConfirmation = {emailConfirmation}
      changeName = {changeName}
      changeAge = {changeAge}
      changeEmail = {changeEmail}
      changeEmailConfirmation = {changeEmailConfirmation}
      sendData = {sendData}
      /> : <ConfirmationForm 
      name = {name}
      age = {age}
      email = {email}
      emailConfirmation = {emailConfirmation} />}
    </MainContainer>
  )
}
export default MainPage