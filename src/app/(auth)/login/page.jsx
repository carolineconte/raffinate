'use client'
import { useState } from "react"
import { authService } from '@/services/auth/authService'
import { useRouter } from "next/navigation"
export default function Login() {

  const [username, setUsername] = useState('')
  const [senha, setSenha] = useState('')
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault()

    authService.Login({
      username,
      password: senha
    })
      .then(() => {
        router.push('/')
      })
      .catch((error) => {
        alert('Senha ou usuário errado');
        console.error('Erro durante o registro:', error);
      })
  }
  
  return (
    <form action=""
      onSubmit={handleSubmit}
    >
      <label>Username</label>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Username" />
      <label htmlFor="">Senha</label>
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={e => setSenha(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  )
}