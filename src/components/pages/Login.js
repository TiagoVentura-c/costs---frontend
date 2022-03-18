import { useHistory, } from 'react-router-dom';
import Loading from '../layout/Loading'
import { useEffect, useState } from "react"
import { auth } from "../Api/api"
import { saveToken } from "../Api/auth"
import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"

import styles from './Login.css'
import Message from "../layout/Message"

function Login() {
  const history = useHistory();

  useEffect(()=> {
  }, [])

  const [isLoading, setIsLoading] = useState(false)
  const[email, setEmail] = useState()
  const[password, setPassword] = useState()
  const [message, setMessage] = useState('')
  const [type, setType] = useState('success')

  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }

  function handleChangePassword(e) {
    setPassword(e.target.value)
  }

  const handleSignIn = async e => {
    e.preventDefault();
    setIsLoading(true)
    try {
        const user = {
          login: email,
          password: password
        }
      const response = await auth('/login', user);
      console.log(response)
        saveToken(response.data);
        history.push("/projects")
      } catch (error) {
        setIsLoading(false)
        setType('error')
        setMessage('Email ou senha incorretos')
      }
      finally {
        setIsLoading(false)
      }
  }

  function handleOnClickCreateAccount(){
    history.push("/signin");
  }

  return (
    <div className="login-container">
        {!isLoading && (<div className="login-content">
            {message && <Message type={type} msg={message} />}
            <h2 className="login-title">Faça seu login:</h2>
            <Input value={email} handleOnChange={handleChangeEmail} text={"Email"} placeholder={"email"} type={"email"} />
            <Input value={password} handleOnChange={handleChangePassword} text={"Senha"} placeholder={"senha"} type={"password"} />
            <SubmitButton text={"Entrar"} handleOnClick={handleSignIn}/>
            <div className="separator"></div>
            <SubmitButton text={"Criar conta"} handleOnClick={handleOnClickCreateAccount}/>
        </div>)}
      {isLoading && <Loading />}
    </div>
  )
}

export default Login
