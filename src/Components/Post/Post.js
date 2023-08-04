import React from "react";
import "./post.css";
import { Link } from "react-router-dom";
import default_cover from '../../assets/default-cover.jpeg'
import {basetoString} from "../../fun/basetoString"

const Post = ({ post }) => {
  
  return (
    <div className="post_container">
      <div className="image-container">
        <img src={post.photo?`data:image/png;base64,${basetoString(post.photo.data.data)}`:default_cover} alt="bolg" />
      </div>
      <div className="text_area">
        <p className="date">{new Date(post.createdAt).toDateString()}</p>
        <Link to={`/posts/${post._id}`}>
          <p className="post_title">{post.title}</p>
        </Link>
        <p className="auther"> -by {post.username}</p>
      </div>
    </div>
  );
};

export default Post;
