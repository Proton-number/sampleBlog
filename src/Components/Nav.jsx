import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import NotesIcon from "@mui/icons-material/Notes";
import { signOut } from "firebase/auth";
import { auth } from "/src/config/firebase.jsx";

function Nav({ loggedIn, setLoggedIn }) {
  const navigate = useNavigate();

  const logIn = () => {
    navigate("/");
  };

  const logOut = async () => {
    try {
      await signOut(auth).then(() => {
        localStorage.clear();
        setLoggedIn(false);
        navigate("/");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const home = () => {
    navigate("/home");
  };

  const createPost = () => {
    if (loggedIn) {
      navigate("/createPost");
    }
  };

  return (
    <AppBar sx={{ backgroundColor: "hsl(350, 34%, 70%)" }}>
      <Toolbar>
        <Stack
          direction="row"
          sx={{ alignItems: "center" }}
          spacing={{ sm: 40, lg: 120 }}
        >
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
            <Typography variant="h4" component="h3">
              <b> myBlog</b>
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
            >
              <NotesIcon />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
            <Typography onClick={home} sx={{ cursor: "pointer" }}>
              Home
            </Typography>

            {!loggedIn ? (
              <Typography onClick={logIn} sx={{ cursor: "pointer" }}>
                Login
              </Typography>
            ) : (
              <>
                <Typography onClick={createPost} sx={{ cursor: "pointer" }}>
                  CreatePost
                </Typography>
                <Typography onClick={logOut} sx={{ cursor: "pointer" }}>
                  LogOut
                </Typography>
              </>
            )}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
