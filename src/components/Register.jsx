import { Button, Grid, TextField, Typography } from "@mui/material";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

function Register({ setToken, setLogged }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [tokenCookie, setTokenCookie] = useCookies("token");

  function handleRegister() {
    axios
      .post("http://localhost:80/auth/register", {
        username,
        password,
        passwordConfirm,
      })
      .then((response) => {
        setToken(response.data.token);
        setLogged(true);
        setTokenCookie("token", response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  return (
    <Grid container sx={{ display: "flex", flexDirection: "column" }} gap={4}>
      <Grid item>
        <Typography variant="h6">Register</Typography>
      </Grid>
      <Grid item>
        <TextField
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
        <TextField
          type={"password"}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          id="cPassword"
          label="Confirm password"
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <Button onClick={() => handleRegister()} variant="contained" endIcon={<AppRegistrationIcon/>}>
          Register
        </Button>
      </Grid>
    </Grid>
  );
}

export default Register;
