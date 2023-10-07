import { createContext, useState } from "react";


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

  const logout =() => {
    setUser(defaultState)
  }

  return (
    <UserContext.Provider value = {{ user, setAutorization, logout }}>
      { props.children }

    </UserContext.Provider>

  )
}
