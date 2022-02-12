import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signin } from '../Api/api';
import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"
import styles from './Signin.css'

function Signin() {
  const history = useHistory();

  const[email, setEmail] = useState()
  const[password, setPassword] = useState()
  const[name, setName] = useState()

  function handleChangeName(e) {
    setName(e.target.value)
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }

  function handleChangePassword(e) {
    setPassword(e.target.value)
  }


  function handleOnClick(){
    const user = {
      name: name,
      login: email,
      password: password
    }

    signin(user)
    .then(response => {
      if(response.status === 200){
        history.push('/login')
        window.alert('Conta criada com sucesso')
      }
    })
    .catch(error=>{
      window.alert('Email já cadastrado')
    })
    
  }

  return (
    <div className="login-container">
      
        <div className="login-content">
            <h2 className="login-title">Faça seu cadastro:</h2>
            <Input value={name} handleOnChange={handleChangeName} text={"Seu nome"} placeholder={"nome"} type={"text"}/>
            <Input value={email} handleOnChange={handleChangeEmail} text={"Email"} placeholder={"email"} type={"email"} />
            <Input value={password} handleOnChange={handleChangePassword} text={"Senha"} placeholder={"senha"} type={"password"} />
            <SubmitButton text={"Criar conta"} handleOnClick={handleOnClick}/>
        </div>        
    </div>
  )
}

export default Signin
