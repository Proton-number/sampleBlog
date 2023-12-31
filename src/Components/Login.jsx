import React from "react";
import { Box, Stack, Typography, Button, Paper } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { auth, provider } from "/src/config/firebase.jsx";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setLoggedIn }) {
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      await signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("loggedIn", true);
        setLoggedIn(true);
        navigate("/home");
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Paper sx={{ padding: "30px", borderRadius: "15px" }} elevation={4}>
        <Stack spacing={4}>
          <Typography variant="h6">Sign In With Google to continue </Typography>
          <Button onClick={signIn} variant="contained" endIcon={<GoogleIcon />}>
            {" "}
            Sign in with{" "}
          </Button>
        </Stack>
      </Paper>
    </>
  );
}

export default Login;
