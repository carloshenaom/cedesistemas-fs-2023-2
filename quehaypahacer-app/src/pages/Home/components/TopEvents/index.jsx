import { styled } from "styled-components"
import { COLORS } from "../../../../GlobalStyles"


const TopEventsContainer = styled.section`
  //border: 1px solid red;
  margin: 25px 0;

`
const EventWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  margin: 10px;
  overflow:hidden;
  background-color:#eee;

  &:hover{
    background-color:#ccc;
    cursor: pointer;
  }
`
const EventContent = styled.div`
  //border: 1px solid red;
  margin-left:15px;
  h5{
    font-size:1.2em;
    line-height:1.2em;
    margin: 10px 0;

  }
  p{
    margin:0;
  }

`

const FreeText = styled.p `
  background-color: ${COLORS.error};
  color:#fff;
  padding: 3px 4px;
  border-radius: 13px;
  display: inline;
`


const EVENTS_DATA = [
  { id:1,
    image:'https://www.eltiempo.com/files/image_640_428/uploads/2022/07/29/62e3d34873715.jpeg',
    title:'Desfile de Silleteros', date:'10/09/2023', location:'Medellin', is_free:true, price:0, category:1 },
  { id:2,
    image:'https://lh5.googleusercontent.com/p/AF1QipMBFBeqhHIkgZRLA2s4FHCkXqy7bWNTYP5HBtq9',
    title:'Tour Gastronomico', date:'15/09/2023', location:'Poblado Medellin', is_free:false, price:150000, category:2 },
  { id:3,
    image:'https://viajeronomada.com/wp-content/uploads/2020/01/quehacerenmedellin.jpg',
    title:'Encuentro cuultural', date:'10/09/2023', location:'Parque de Berrio - Medellin', is_free:true, price:0, category:1 },
  { id:4,
    image:'https://where.com.co/wp-content/uploads/2022/07/sIRVALO-PUES.jpg',
    title:'Concierto de Música', date:'10/09/2023', location:'La Macarena - Medellin', is_free:false, price:80000, category:3 }
]

// tiene un retorno implicito o sea es directo el return
// no se usa la palabra return y cambiar las llaves por parentesis
const Event = (props) => (
  <EventWrapper>
    <img src={props.image} width="200px"/>
    <EventContent>
      <h4>{props.title}</h4>
      <p>{props.date}</p>
      <p>{props.location}</p>
      {
        props.is_free ? <FreeText>Gratuito</FreeText> : <p>$ {props.price}</p>
      }
    </EventContent>

  </EventWrapper>
)

export const TopEvents =() =>{


  return(
    <TopEventsContainer>
      <h3>Eventos Cercanos</h3>
      <section>
        {
          // spreedoperator de javascript
          EVENTS_DATA.map(item => <Event {...item} />)
        }
      </section>

    </TopEventsContainer>
  )
}
