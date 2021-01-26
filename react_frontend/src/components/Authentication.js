import React from "react"
import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles"


// Styling for the Material-UI input, this is the best way currently
const LoginButton = withStyles(() => ({
  root: {
    color: "black",
    backgroundColor: "#ffdb4d",
    '&:hover': {
      backgroundColor: "#fcba03",
    },
  },
}))(Button);

const LogoutButton = withStyles(() => ({
  root: {
    color: "black",
    backgroundColor: "#cc0000",
    '&:hover': {
      backgroundColor: "#b20000",
    },
  },
}))(Button);


const Authentication = ({ setUserId }) => {

  const handleLogout = () => {
    setUserId(-1)
    localStorage.setItem('userId', -1)
    window.location.href = 'https://festive-chandrasekhar-e40420.netlify.app/'
  }

  return (
    <nav className="authHeader">
      { localStorage.getItem("userId") == -1 ?
        <Link to="/login">
          <LoginButton
            className="loginButton"
            color="primary"
            variant="contained"
          > Login
          </LoginButton>
        </Link>
        :
        <LogoutButton
          className="logoutButton"
          color="secondary"
          variant="contained"
          onClick={handleLogout}
        > Logout
        </LogoutButton>
      }
    </nav>
  )
}

export default Authentication