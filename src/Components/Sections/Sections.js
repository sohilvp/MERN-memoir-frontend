import React, { useContext } from "react";
import { FetchContext } from "../../context/ContextApi";
import SmallPost from "../SmallPost/SmallPost";
import "./section.css";

const Sections = () => {
  const { posts } = useContext(FetchContext);
  return (
    <div className="section_container">
      {posts
        .map((post) => {
          return <SmallPost post={post} key={post._id} />;
        })
        .slice(0, 24)}
    </div>
  );
};

export default Sections;
