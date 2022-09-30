import * as React from "react";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import Copyright from "./Copyright";
import { styled } from "@mui/material/styles";
import { API } from "../service/api";
import { LoginData } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = (props) => {
  const { setAccount } = React.useContext(LoginData);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const response = await API.userLogin({
      email,
      password,
    });
    if (response.isSuccess) {
      localStorage.setItem("token", response.data.token);
      setAccount({ name: response.data.name, id: response.data.id });
      props.setAuth(true);
      navigate("/home");
    }
  };

  const checkToken = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await API.userAutoLogin();
      if (response.isSuccess) {
        setAccount({ name: response.data.name, id: response.data.id });
        props.setAuth(true);
        navigate("/home");
      }
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  const CustomContainer = styled(Container)`
    border: 1px solid rgb(0 0 0/0.1);
    border-radius: 10px;
    margin-top: 50px;
  `;

  return (
    <CustomContainer component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mb: 5, mt: 3 }} />
    </CustomContainer>
  );
};

export default Login;
