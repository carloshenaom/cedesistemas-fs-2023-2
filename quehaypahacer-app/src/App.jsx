import { GlobalStyles } from "./GlobalStyles"
import { Home } from "./pages/Home"
import { EventDetail } from "./pages/EventDetail"

export const App = () => {

 // const appName = 'Que hay pa hacer'
  return (
    <>
      <GlobalStyles />
      <EventDetail />
    </>
  )
}
