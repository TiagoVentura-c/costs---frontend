import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from "../Api/api"

import styles from './Login.module.css'

import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"
import Loading from '../layout/Loading';
import Message from '../layout/Message';

function Signin() {
  const history = useHistory();

  const [message, setMessage] = useState('')
  const [type, setType] = useState('success')

  const [isLoading, setIsLoading] = useState(false)
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

  

  const handleOnClick = async e => {
    e.preventDefault();
    try {
        const user = {
          name: name,
          login: email,
          password: password
        }
        setIsLoading(true)
        await auth('/signin', user)
        window.alert('Conta criada com sucesso')
      
        history.push("/login")
      } catch (error) {
        setType('error')
        setMessage('Erro ao salvar')
        setIsLoading(false)
      }
      finally {
        setIsLoading(false)
      }
  }

  return (
    <div className={styles.login_container}>
      {!isLoading && (
      <div className={styles.login_content}>
            {message && <Message type={type} msg={message} />}
            <h2 className={styles.login_title}>Faça seu cadastro:</h2>
            <Input value={name} handleOnChange={handleChangeName} text={"Seu nome"} placeholder={"nome"} type={"text"}/>
            <Input value={email} handleOnChange={handleChangeEmail} text={"Email"} placeholder={"email"} type={"email"} />
            <Input value={password} handleOnChange={handleChangePassword} text={"Senha"} placeholder={"senha"} type={"password"} />
            <SubmitButton text={"Criar conta"} handleOnClick={handleOnClick}/>
      </div> )} 
      {isLoading && <Loading />}
    </div>
  )
}

export default Signin
