import { Link } from "react-router-dom"

import { Form, SignUpContainer } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import logoImage from '../../assets/logo.svg'

export function SignUp() {
  return (
    <SignUpContainer>
      <div>
        <img src={logoImage} alt="losangolo azul" />
        <h1>food explorer</h1>
      </div>
      <Form>
        <h2>Crie sua conta</h2>

        <Input
          label="Seu nome"
          type="text"
          placeholder="Exemplo: Maria da Silva"
        />

        <Input
          label="Email"
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />

        <Input
          label="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
        />

        <Button title="Criar conta" type="submit"  />
        
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </SignUpContainer>
  )
}
