import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Button } from "@mui/material";
import { styled } from "@mui/system";
import { LoginData } from "../context/LoginContext";

const Navbar = () => {
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

  const { account } = React.useContext(LoginData);

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h5" p="10px" component="div" sx={{ flexGrow: 1 }}>
          BLOG STATION
        </Typography>

        <Goto href="/about" color="inherit">
          About
        </Goto>

        <Goto href="/blogs" color="inherit">
          Blogs
        </Goto>
        {account.name ? (
          <>
            <AuthBtn href="/me">{account.name}</AuthBtn>
            <AuthBtn href="/create">Create Blog</AuthBtn>
          </>
        ) : (
          <>
            <AuthBtn href="/login" color="inherit">
              Login
            </AuthBtn>
            <AuthBtn href="/signup" color="inherit">
              Signup
            </AuthBtn>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
