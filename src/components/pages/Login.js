import { useHistory, } from 'react-router-dom';

import { useEffect, useState } from "react"
import { login } from "../Api/api"
import { isAuthenticated } from "../Api/auth"
import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"

import styles from './Login.css'
import Message from "../layout/Message"

function Login() {
  const history = useHistory();

  useEffect(()=> {
  }, [])


  const[email, setEmail] = useState()
  const[password, setPassword] = useState()
  const [message, setMessage] = useState('')
  const [type, setType] = useState('success')

  function handleChangeEmail(e) {
    setEmail(e.target.value)
    console.log(e.target.value)
  }

  function handleChangePassword(e) {
    setPassword(e.target.value)
  }

  function handleOnClick(){
    const user = {
      login: email,
      password: password
    }

    login(user).then(() => {
      if(isAuthenticated()){
        history.push("/projects")
      }
    }).catch(() => {
      setType('error')
      setMessage('Email ou senha incorretos')
    })
  }

  function handleOnClickCreateAccount(){
    history.push("/signin");
  }

  return (
    <div className="login-container">
        <div className="login-content">
            {message && <Message type={type} msg={message} />}
            <h2 className="login-title">Faça seu login:</h2>
            <Input value={email} handleOnChange={handleChangeEmail} text={"Email"} placeholder={"email"} type={"email"} />
            <Input value={password} handleOnChange={handleChangePassword} text={"Senha"} placeholder={"senha"} type={"password"} />
            <SubmitButton text={"Entrar"} handleOnClick={handleOnClick}/>
            <div className="separator"></div>
            <SubmitButton text={"Criar conta"} handleOnClick={handleOnClickCreateAccount}/>
        </div>        
    </div>
  )
}

export default Login
