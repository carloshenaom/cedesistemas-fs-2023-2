import { Layout } from "../../components/Layout";
import { Button, FormContainer, FormControl } from "../../GlobalStyles";
import { Link } from "react-router-dom";




export const Login = () => {

  return (
    <Layout>

      <h2>Iniciar Session</h2>
      <hr />
      <FormContainer>
        <form>
          <FormControl>
            <label>Correo Electrónico</label>
            <input type="email" />
          </FormControl>
          <FormControl fontSize="1.2em">
            <label>Contraseña</label>
            <input type="password" />
          </FormControl>
          <Button type="submit">Acceder</Button>
        </form>
      </FormContainer>
      <p>¿Auno no tiene una cuenta? <Link to="/signup">Registrase!</Link></p>

    </Layout>
  );
};
