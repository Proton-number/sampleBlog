import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import CreatePost from "./Components/CreatePost";

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn"));
  return (
    <>
      <Router>
        <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

        <Routes>
          <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/createPost"
            element={<CreatePost loggedIn={loggedIn} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
