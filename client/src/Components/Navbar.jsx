import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { LoginData } from "../context/LoginContext";
import { Button } from "@mui/material";
import { API } from "../service/api";

const Navbar = ({ auth }) => {
  const navigate = useNavigate();

  const Goto = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    margin-left: 10px;
    padding: 10px;
    color: white;
  `;

  const AuthBtn = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    padding: 10px 20px;
    border-radius: 5px;
    margin-left: 10px;
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
  `;

  const MainLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: bold;
  `;

  const logoutUser = async () => {
    await API.deleteToken({ token: localStorage.getItem("token") });
    localStorage.removeItem("token");
    navigate("/login");
  };

  const { account } = React.useContext(LoginData);

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h5" p="10px" component="div" sx={{ flexGrow: 1 }}>
          <MainLink to="/">BLOG STATION</MainLink>
        </Typography>

        <Goto to="/about" color="inherit">
          About
        </Goto>

        <Goto to="/blogs" color="inherit">
          Blogs
        </Goto>
        {auth ? (
          <>
            <AuthBtn to="/me">{account.name}</AuthBtn>
            <AuthBtn to="/create-blog">Create Blog</AuthBtn>
            <Button
              style={{
                color: "white",
                padding: "10px 20px",
                margin: "0px 10px",
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              onClick={logoutUser}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <AuthBtn to="/login">Login</AuthBtn>
            <AuthBtn to="/signup">Signup</AuthBtn>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
