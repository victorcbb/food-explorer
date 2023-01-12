import { ChangeEvent, FormEvent, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

import { Form, SignInContainer } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { useAuth } from "../../hook/useAuth"

import logoImage from '../../assets/logo.svg'

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const { signIn } = useAuth()

  function handleSingIn(event: FormEvent) {
    event.preventDefault()
    
    if (!email || !password) {
      return toast.warn("Preencha todos os campos!")
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
      return toast.error("Usuário e/ou senha inválidos.")
    }

    if (/^[A-Za-z0-9]+$/.test(password) === false) {
      return toast.error("Usuário e/ou senha inválidos.")
    }
    
    if (password.length < 3) {
      return toast.error("Usuário e/ou senha inválidos.")
    }
    setLoading(true)
    
    signIn({ email, password })
    setLoading(false)
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

          <Button title="Entrar" type="submit" loading={loading} />

          <Link to="/register">Criar uma conta</Link>
        </Form>
    </SignInContainer>
  )
}
