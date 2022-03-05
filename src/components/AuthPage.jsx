import React, { useState } from "react";
import { Button, Box, Grid } from "@mui/material";
import Login from "./Login";
import Register from "./Register";

function AuthPage({ setLogged, setToken }) {
  const [isLoginPage, setIsLoginPage] = useState(true);

  const style = {
    height: 500,
    width: 500,
    margin: "auto",
    display: "flex",
    alignItems: "center",
    borderRadius: 4,
  };

  return (
    <Box sx={style} component="form" boxShadow={4}>
      <Grid container sx={{ display: "flex", flexDirection: "column"}} item gap={4}>
        <Grid item>
          <Button onClick={() => setIsLoginPage(true)}>Login</Button>
          <Button  onClick={() => setIsLoginPage(false)}>Register</Button>
        </Grid>
        {isLoginPage ? (
          <Login setToken={setToken} setLogged={setLogged} />
        ) : (
          <Register setToken={setToken} setLogged={setLogged} />
        )}
      </Grid>
    </Box>
  );
}

export default AuthPage;
