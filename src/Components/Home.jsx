import { Box, Stack, Typography, IconButton, Paper, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { dataBase, auth } from "../config/firebase";
import DeleteIcon from "@mui/icons-material/Delete";

function Home({ loggedIn }) {
  const [postList, setPostList] = useState([]);

  const postCollectionRef = collection(dataBase, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [postList]);

  const deleteBtn = async (id) => {
    const postDoc = doc(dataBase, "posts", id);
    await deleteDoc(postDoc);
  };

  return (
    <>
      <Grid container spacing={4}>
        {postList.map((post, index) => {
          return (
            <Grid item key={index}>
              <Paper sx={{ padding: "30px" }} elevation={6}>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <Typography varaint="h3"> {post.title}</Typography>{" "}
                    {!loggedIn && post.author.id === auth.currentUser.uid && (
                      <IconButton
                        onClick={() => {
                          deleteBtn(post.id);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    )}
                  </Box>
                  <Typography>{post.post}</Typography>
                  <Typography>@ {post.author.name}</Typography>
                </Stack>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default Home;
