import React, { useState, useEffect } from "react";
import AuthPage from "./AuthPage";
import TodoMain from "./TodoMain";
import { useCookies } from "react-cookie";

function HomePage() {
  const [logged, setLogged] = useState(false);
  const [token, setToken] = useState("");
  const [tokenCookie,setTokenCookie,removeCookie] = useCookies("token");

  useEffect(() => {
    if(tokenCookie.token){
      setToken(tokenCookie.token.token);
      setLogged(true);
    }
  }, []);
  return (
    <>
      {logged ? (
        <TodoMain removeCookie={removeCookie}token={token} setLogged={setLogged} />
      ) : (
        <AuthPage setToken={setToken} setLogged={setLogged} />
      )}
    </>
  );
}

export default HomePage;
