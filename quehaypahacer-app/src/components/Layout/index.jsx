import { useContext, useEffect } from "react"
import { TopBar } from "../TopBar"
import { styled } from 'styled-components'
import { UserContext } from "../../context/UserContext"

const ContentLayout = styled.section`
  margin-top: 60px;
  padding: 10px 15px;
`


export const Layout = (props) =>{

  const { validateSession } = useContext(UserContext) //llamada al contexto

  useEffect(()=>{
    validateSession()
  }, []) // 1 vez

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
