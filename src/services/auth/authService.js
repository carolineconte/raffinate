import { tokenService } from './tokenService'

export const authService = {

  async Login({ username, password }) {
    return fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(async (res) => {
        if (!res.ok) throw new Error('Usuario ou senha invalido')
        const data = await res.json();
        console.log(data.token)
       tokenService.save(body.data.token)
      })
  },

  async Register({ username, password }) {

    return fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(async (res) => {
        if (!res.ok) throw new Error('Erro ao registrar usuário')
        const body = await res.json();
        return body;
      })

  }
}