import { Button } from "../../GlobalStyles"
import { Layout } from "../../components/Layout"



export const Profile = () => {

  return(
      <Layout>

        <h3>Mi cuenta</h3>
        <hr />
        <p>Nombre: <b>Juan</b></p>
        <p>Correo: <b>Juan</b></p>
        <p>Identificación: <b>Juan</b></p>
        <p>Teléfono: <b>Juan</b></p>
        <br /><br />
        <Button>
          Cerrar Session
        </Button>

      </Layout>
  )
}
