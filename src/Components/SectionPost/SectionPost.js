import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./sectionpost.css";

const SectionPost = ({ posts }) => {
  return (
    <div className="sectionpost_container">
      <div className="sectionpost_main">
        <Link to={`/posts/${posts._id}`}>
          <h2>{posts.title}</h2>
        </Link>
        <p className="auther">-by {posts.username}</p>
      </div>
      <div className="icon">
        <BsArrowDownRight />
      </div>
    </div>
  );
};

export default SectionPost;
