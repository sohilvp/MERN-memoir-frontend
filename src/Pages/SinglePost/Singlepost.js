import React, { useContext, useEffect, useState } from "react";
import { RiDeleteBin4Line } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import { ContextUser } from "../../context/UserContext";
import Navbar from "../../Components/Navbar/Navbar";
import Loader from "../../Components/Loader/Loader";
import default_cover from "../../assets/default-cover.jpeg";
import axios from "axios";
import "./singlepost.css";
import {basetoString} from "../../fun/basetoString";

const Singlepost = () => {
  const [singlePost, setSinglePost] = useState({});
  const [load, setLoad] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { auth } = useContext(ContextUser);

  useEffect(() => {
    const singleFetch = async () => {
      try {
        setLoad(true);
      const spost = await axios.get(`https://memoir-server-backend.onrender.com/posts/${id}`,{headers: {
        'Content-Type': 'application/json',
      }});
      setSinglePost(spost.data);
      setLoad(false);
      } catch (error) {
        console.log(error);
      }
      
    };
    singleFetch();
  }, [id]);

  const deletePost = async () => {
    try {
      const res = await axios.delete("https://memoir-server-backend.onrender.com/posts/" + id, {
    });
    if(res.status === 200){

      navigate("/");
    }
    } catch (error) {
      
      console.log(error);
    }
    
  };

  if (load) {
    return <Loader />;
  }
  const { desc } = singlePost;
  const para = desc?.join("\n");
  

  return (
    <React.Fragment>
      <Navbar />
      <div className="single_post__container container">
        <div className="img-container">
          <img
            src={
              singlePost.photo
                ? `data:image/png;base64,${basetoString(singlePost.photo.data.data)}`
                : default_cover
            }
            alt="cover pic"
          />
        </div>
        <div className="icon_container">
          {auth.username === singlePost.username ? (
            <span>
              {" "}
              <RiDeleteBin4Line className="icons delete" onClick={deletePost} />
              Delete
            </span>
          ) : null}
        </div>
        <h1>{singlePost.title}</h1>
        <pre>{para}</pre>
      </div>
    </React.Fragment>
  );
};

export default Singlepost;
