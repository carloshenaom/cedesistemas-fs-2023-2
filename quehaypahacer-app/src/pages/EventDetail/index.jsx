import { styled } from "styled-components"
import { Layout } from "../../components/Layout"
import { Button } from "../../GlobalStyles"
import { COLORS } from "../../GlobalStyles"
import { useParams } from "react-router-dom"


const DetailWrapper = styled.section`

  h2{
    font-size: 2em;
    text-align: center;
  }
`

export const EventDetail = () =>{

  const { id } = useParams()

  return(
    <Layout>
      <DetailWrapper>
        <h2>titulo { id }</h2>
        <div>
          <img src="https://www.eltiempo.com/files/image_640_428/uploads/2022/07/29/62e3d34873715.jpeg" width="100%" />
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nostrum nobis soluta vitae autem maiores voluptatem iure? Pariatur, sit consectetur ducimus labore accusantium nisi culpa repellendus ullam. Delectus, ea pariatur.</p>
          <p>Ubicación</p>
          <p>Categoria</p>
          <p>Precio</p>
          <p>Fecha</p>
        </div>

        <Button color={COLORS.secondary}>Quiero participar</Button>
      </DetailWrapper>
    </Layout>
  )
}
