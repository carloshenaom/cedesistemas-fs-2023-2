import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { GlobalStyles } from "./GlobalStyles"
import { Home } from "./pages/Home"
import { EventDetail } from "./pages/EventDetail"
import { Profile } from "./pages/Profile"
import { Confirmation } from "./pages/Confirmation"
import { Login } from "./pages/Login"
import { UserContextStore } from "./context/UserContext"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/detail/:id',
    element: <EventDetail />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/confirmation',
    element: <Confirmation />
  },
  {
    path: '/login',
    element: <Login />
  }
])

export const App = () => {

 // const appName = 'Que hay pa hacer'
  return (
    <>
      <GlobalStyles />
      <UserContextStore>
        <RouterProvider router={router} />
      </UserContextStore>

    </>
  )
}
