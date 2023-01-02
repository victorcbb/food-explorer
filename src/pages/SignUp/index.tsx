import { Link, useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify"
import { ChangeEvent, FormEvent, useState } from "react"

import { Form, SignUpContainer } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { api } from "../../services/api"

import logoImage from '../../assets/logo.svg'

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!name || !email || !password) {
      return toast.warn("Preencha todos os campos!")
    }

    api.post("/users", { 
      name, 
      email, 
      password 
    })
    .then(() => {
      toast.success("Usuário cadastrado com sucesso!")
      navigate("/")
    })
    .catch(error => {
      if (error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error("Não foi possível cadastrar.")
      }
    })
  }

  return (
    <SignUpContainer>
      <div>
        <img src={logoImage} alt="losangolo azul" />
        <h1>food explorer</h1>
      </div>
      <Form onSubmit={handleSignUp}>
        <h2>Crie sua conta</h2>

        <Input
          label="Seu nome"
          type="text"
          placeholder="Exemplo: Maria da Silva"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />

        <Input
          label="Email"
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />

        <Input
          label="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />

        <Button title="Criar conta" type="submit"  />
        
        <Link to="/">Já tenho uma conta</Link>

        <ToastContainer 
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Form>
    </SignUpContainer>
  )
}
