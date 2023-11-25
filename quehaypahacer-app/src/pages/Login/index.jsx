import { Layout } from "../../components/Layout"
import { Button, FormContainer, FormControl } from "../../GlobalStyles"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { httpRequest } from "../../utils/HttpRequest"
import { setToken } from "../../utils/TokenLocalStorage"
import { ALERT_ICON, Alert } from "../../components/Alerts"

const emailPatter = /^[A-Za-z]+[A-Za-z0-9_\.]*@[A-Za-z0-9]+\.[A-Za-z]+/i

export const Login = () =>{

  //const { setAutorization } = useContext(UserContext)
  const navigate = useNavigate()

  const { register, handleSubmit, formState:{errors} } =useForm()

  const onSubmitLogin = async data => {
    try {
      const response = await httpRequest({
        endpoint: '/users/login',
        body:data
      })

      const {token} = response.data
      setToken(token)
      //setAutorization({})
      setTimeout(()=>{ //pausa de 1 seg
        navigate('/')
      }, 1000)


    } catch (error) {

      Alert({
        icon:ALERT_ICON.ERROR,
        title:'Credenciales Invalidas',
        text: 'Verifica tus credenciales'
      })
    }
  }

  return(
    <Layout>

    <h2>Iniciar Session</h2>
    <hr />
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmitLogin)} noValidate>
        <FormControl>
          <label>Correo Electrónico</label>
          <input type="email" {...register("email", { required:true, pattern:emailPatter})}/>
          { errors.email?.type === 'required' && <span>Correo  requerido</span> }
          { errors.email?.type === 'pattern' && <span>Correo incompleto</span> }

        </FormControl>
        <FormControl fontSize="1.2em">
          <label>Contraseña</label>
          <input type="password" {...register("password", { required:true, minLength:4 })}/>
          { errors.password?.type === 'required' && <span>Clave requerido</span> }
          { errors.password?.type === 'minLength' && <span>Mínimo 4 caracteres</span> }

        </FormControl>
        <Button type="submit">Acceder</Button>
      </form>
    </FormContainer>
    <p>¿Auno no tiene una cuenta? <Link to="/signup">Registrase!</Link></p>

    </Layout>
  )
}
