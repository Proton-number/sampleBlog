import React, { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  Paper,
  TextField,
} from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { dataBase, auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

function CreatePost({ loggedIn }) {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const navigate = useNavigate();

  const postCollectionRef = collection(dataBase, "posts");

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      post,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/home");
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/createPost");
    }
  });

  return (
    <Paper sx={{ padding: "40px", borderRadius: "12px" }} elevation={4}>
      <Stack spacing={4}>
        <Typography variant="h4" align="center">
          Create a new post
        </Typography>
        <TextField
          label="Title.."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Post..."
          multiline
          maxRows={4}
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
        <Button variant="contained" onClick={createPost}>
          Submit Post
        </Button>
      </Stack>
    </Paper>
  );
}

export default CreatePost;
