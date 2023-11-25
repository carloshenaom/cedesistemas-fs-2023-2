import { createContext, useState } from "react";
import { getToken, removeToken } from "../utils/TokenLocalStorage";
import { httpRequest } from "../utils/HttpRequest";


const defaultState = {
  isAuth: false,
  name:'',
  email:'',
  document:'',
  phone:''
}

export const UserContext = createContext(defaultState)

export const UserContextStore = props => {

  const [user, setUser] = useState(defaultState)

  const setAutorization = ( userData ) => {
    setUser({...userData, isAuth:true})
  }

  const validateSession = () => {
    const token = getToken()
    console.log(token)
    if (token && !user.isAuth){//que exista el token pero no tenemos el isauth en verdadero
      requestUser()
    }

  }

  const requestUser = async () => {
    try {
      console.log('requestuser')
      const response = await httpRequest({
        endpoint: '/user/info',
        token: getToken()
      })
      console.log(response)
      const {data} = response
      setAutorization(data)
    } catch (error) {
      console.log(error)
      logout()
    }
  }

  const logout =() => {
    setUser(defaultState)
    removeToken()
  }

  return (
    <UserContext.Provider value = {{ user, validateSession , logout }}>
      { props.children }

    </UserContext.Provider>

  )
}
