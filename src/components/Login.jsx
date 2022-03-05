import { Button, Grid, TextField, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login"
import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

function Login({ setToken, setLogged }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tokenCookie, setTokenCookie] = useCookies("token");

  function handleLogin() {
    axios
      .post("http://localhost:80/auth/login", {
        username,
        password,
      })
      .then((response) => {
        setToken(response.data.token);
        setLogged(true);
        setTokenCookie("token", response.data);
      })
      .catch((err) => {
        alert("Can not log in.");
      });
  }
  return (
    <Grid container sx={{ display: "flex", flexDirection: "column" }} gap={4}>
      <Grid item>
        <Typography variant="h6">Login</Typography>
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          type={"text"}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          label="Username"
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <TextField
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          label="password"
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <Button onClick={() => handleLogin()} variant="contained" endIcon={<LoginIcon/>}>
          Login
        </Button>
      </Grid>
    </Grid>
  );
}

export default Login;