import React from "react";
import { Link } from "react-router-dom";
import { MdAccountBox } from "react-icons/md";
import "./smallpost.css";

const SmallPost = ({ post }) => {
  return (
    <div className="smallpost_container">
      <div className="smallpost_top">
        <Link to={`/posts/${post._id}`}>
          <p className="smallpost_title">{post.title}</p>
        </Link>
      </div>
      <div className="smallpost_bottom">
        <p className="auther">
          <MdAccountBox />
          {post.username}
        </p>
      </div>
    </div>
  );
};

export default SmallPost;
