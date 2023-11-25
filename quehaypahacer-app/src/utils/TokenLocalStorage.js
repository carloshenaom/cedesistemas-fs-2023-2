const KEY = 'token_quehayparahacer'

export const  setToken = (token) => {
  console.log(token)
  localStorage.setItem(KEY, token)
}

export const getToken = () => {
  return localStorage.getItem(KEY)
}

export const removeToken = () => {
  localStorage.removeItem(KEY)
}
