
import React, { useContext } from "react";


import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";
import Error from "./Pages/Error/Error";
import Singlepost from "./Pages/SinglePost/Singlepost";
import CreatePost from "./Pages/CreatePost/CreatePost";
import { ContextUser } from "./context/UserContext";

function App() {
const {auth} = useContext(ContextUser)
  return (
    <Routes>

      {auth.username && <Route path="/profile" element={<Profile/>}/>}
      {auth.username && <Route path="/newpost" element={<CreatePost/>}/>}
      <Route path="/posts/:id" element={<Singlepost/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route  path="*" element={<Error/>}/>
      
    </Routes>
  );
}

export default App;
