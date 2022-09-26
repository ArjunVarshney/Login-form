import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";

const UserAuth = () => {
  const [auth, setAuth] = useState("login");

  return (
    <Box>
      {auth == "login" ? (
        <Login setAuth={setAuth} />
      ) : (
        <SignUp setAuth={setAuth} />
      )}
    </Box>
  );
};

export default UserAuth;
