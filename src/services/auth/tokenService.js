export const tokenService = {
  save(accessToken) {
    localStorage.setItem('ACCESS_TOKEN_KEY', accessToken)
    sessionStorage.setItem('ACCESS_TOKEN_KEY', accessToken)
  },
  get() {
    return localStorage.getItem('ACCESS_TOKEN_KEY')
  },
  delete() {
    localStorage.removeItem('ACCESS_TOKEN_KEY')
    sessionStorage.removeItem('ACCESS_TOKEN_KEY')
  }
}