import { styled } from "styled-components"
import { Layout } from "../../components/Layout"
import { Button } from "../../GlobalStyles"
import { COLORS } from "../../GlobalStyles"
import { useParams } from "react-router-dom"
import { httpRequest, HTTP_METHODS } from "../../utils/HttpRequest"
import { useContext, useEffect, useState } from "react"
import { currencyFormat } from "../../utils/CurrencyFormat"
import { dateFormat } from "../../utils/dateFormat"
import { UserContext } from "../../context/UserContext"
import { Alert } from "../../components/Alerts"
import { getCategoryText } from "../../constants/categoriesDict"


const DetailWrapper = styled.section`

  h2{
    font-size: 2em;
    text-align: center;
  }
`

export const EventDetail = () =>{

  const { id } = useParams()
  const [event, setEvent] = useState({})
  const { user } = useContext(UserContext)

  useEffect(()=>{
    loadEvent()
  },[id])

  const loadEvent = async () =>{
    try {

      const response = await httpRequest({
        method: HTTP_METHODS.GET,
        endpoint: `/events/${id}`
      })
      //console.log(response)
      const {data} = response
      setEvent(data)

    } catch (error) {
      console.log(error)
      //throw error
    }
  }
  const joinToEvent =()=>{
    if(user.isAuth){
      //taller final... registrarlo al evento
      // si sale bien... redireccionarlo a confirmacion
      // si sale mal... mostrar una alerta coin la restriccion
    }else{
      // Alert
      Alert({
        title:'Autenticación Requerida',
        text:'Para unirte '
      })
    }
  }

  return(
    <Layout>
      <DetailWrapper>
        <h2>{event.name}</h2>
        <div>
          <img src={event.image} width="100%" height="auto"/>
        </div>
        <div>
          <p>{event.description}</p>
          <p>{event.place}</p>
          <p>{getCategoryText(event.idCategory)}</p>
          <p>{event.prize === 0 ? 'Gratuito' : currencyFormat(event.prize) }</p>
          <p>{dateFormat(event.date)}</p>
        </div>

        <Button onClick={joinToEvent} color={COLORS.secondary}>Quiero participar</Button>
      </DetailWrapper>
    </Layout>
  )
}
