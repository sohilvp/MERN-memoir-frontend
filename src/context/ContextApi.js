import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const FetchContext = createContext();

const ContextApi = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(false);
  const fetchPost = async () => {
    try {
      setLoad(true);
      const post = await axios.get("https://memoir-server-backend.onrender.com/posts");
      setPosts(post.data);
      setLoad(false);
    } catch (error) {
      console.log(error)
    }
   
  };
  useEffect(() => {
    fetchPost();
  }, [])
  return (
    <FetchContext.Provider value={{ posts, setPosts, load }}>
      {children}
    </FetchContext.Provider>
  );
};

export default ContextApi;
