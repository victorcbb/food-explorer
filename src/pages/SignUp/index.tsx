import { Link, useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css'
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
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  function handleSignUp(event: FormEvent) {
    event.preventDefault()

    setLoading(true)

    if (!name || !email || !password) {
      setLoading(false)
      return toast.warn("Preencha todos os campos!")
    }

    if (/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]+$/.test(name) === false) {
      setLoading(false)
      return toast.error("Nome com caracteres inválidos.")
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
      setLoading(false)
      return toast.error("E-mail com caracteres inválidos.")
    }

    if (/^[A-Za-z0-9]+$/.test(password) === false) {
      setLoading(false)
      return toast.error("Senha com caracteres inválidos.")
    }

    if (password.length < 3) {
      setLoading(false)
      return toast.error("A senha deve ter ao menos 3 caracteres.")
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
          setLoading(false)
        } else {
          toast.error("Não foi possível cadastrar.")
          setLoading(false)
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

        <Button title="Criar conta" type="submit" loading={loading} />

        <Link to="/">Já tenho uma conta</Link>


      </Form>
    </SignUpContainer>
  )
}
