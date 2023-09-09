import { TopBar } from "../TopBar"
import { styled } from 'styled-components'

const ContentLayout = styled.section`
  margin-top: 60px;
  padding: 10px 15px;
`


export const Layout = (props) =>{

  return(
    <>
    <TopBar />
    <ContentLayout>
      { props.children }
    </ContentLayout>
    <footer>Derechos reservados</footer>
    </>
  )
}
