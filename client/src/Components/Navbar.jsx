import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import { styled } from "@mui/system";
import { LoginData } from "../context/LoginContext";

const Navbar = () => {
  const Goto = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    padding: 0 20px;
  `;

  const {account} = React.useContext(LoginData);

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h5" p="10px" component="div" sx={{ flexGrow: 1 }}>
          BLOG STATION
        </Typography>
        {account.name ? <Typography>logged in</Typography>:<Typography></Typography>}
        <Goto href="/login" color="inherit">
          Login
        </Goto>
        <Goto href="/about" color="inherit">
          About
        </Goto>
        <Goto href="/signup" color="inherit">
          Signup
        </Goto>
        <Goto href="/blogs" color="inherit">
          Blogs
        </Goto>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
