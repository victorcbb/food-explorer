import { Link } from "react-router-dom"

import { Form, SignInContainer } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import logoImage from '../../assets/logo.svg'

export function SignIn() {
  return (
    <SignInContainer>
      <div>
        <img src={logoImage} alt="losangolo azul" />
        <h1>food explorer</h1>
      </div>
      <Form>
        <h2>Faça login</h2>

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

        <Button title="Entrar" type="submit"  />
        
        <Link to="/register">Criar uma conta</Link>
      </Form>
    </SignInContainer>
  )
}
