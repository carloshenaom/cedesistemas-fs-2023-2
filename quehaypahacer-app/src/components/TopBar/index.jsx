import { Link } from "react-router-dom";
import { TopbarContainer, TopbarIcon, TopbarTitle } from "./styles"
import {  IoHomeOutline, IoPersonCircleOutline, IoLogInOutline } from "react-icons/io5";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const TopBar =  () => {

  //const isAuth = false
  const { user } = useContext(UserContext)

  return(
    <TopbarContainer>
      <TopbarIcon>
        <Link to="/">
          <IoHomeOutline />
        </Link>
      </TopbarIcon>
      <TopbarTitle >
        <h5>Que hay pa'hacer</h5>
      </TopbarTitle>
      <TopbarIcon>
        {
          user.isAuth
            ? <Link to="/profile"><IoPersonCircleOutline /> </Link>
            : <Link to="/login"><IoLogInOutline /></Link>
        }
      </TopbarIcon>
    </TopbarContainer>

  )
}
