import { useContext } from "react"
import { Button } from "../../GlobalStyles"
import { Layout } from "../../components/Layout"
import { UserContext } from "../../context/UserContext"
import { useNavigate } from "react-router-dom"



export const Profile = () => {

  const {user,logout} = useContext(UserContext)
  const navigate = useNavigate()

  const closeSession = () => {

    setTimeout(()=>{
      logout()
      navigate('/')
    },2000)

  }


  return(
      <Layout>

        <h3>Mi cuenta</h3>
        <hr />
        <p>Nombre: <b>{user.name}</b></p>
        <p>Correo: <b>{user.email}</b></p>
        <p>Identificación: <b>{user.document}</b></p>
        <p>Teléfono: <b>{user.phone}</b></p>
        <br /><br />
        <Button onClick={closeSession}>
          Cerrar Session
        </Button>

      </Layout>
  )
}
