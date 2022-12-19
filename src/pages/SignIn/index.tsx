import { Link } from "react-router-dom"
import { ChangeEvent, FormEvent, useState } from "react"
import { toast, ToastContainer } from "react-toastify"

import { Form, SignInContainer } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { useAuth } from "../../hook/useAuth"

import logoImage from '../../assets/logo.svg'

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSingIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!email || !password) {
      return toast.warn("Preencha todos os campos!")
    }

    signIn({ email, password })
  }

  return (
    <SignInContainer>
      <div>
        <img src={logoImage} alt="losangolo azul" />
        <h1>food explorer</h1>
      </div>
      <Form onSubmit={handleSingIn}>
        <h2>Faça login</h2>

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

        <Button title="Entrar" type="submit" />

        <Link to="/register">Criar uma conta</Link>
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
    </SignInContainer>
  )
}
