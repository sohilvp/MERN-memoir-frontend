import React, { useContext } from "react";
import CoverPost from "../CoverPost/CoverPost";
import CenterBottom from "./CenterBottom";
import { FetchContext } from "../../context/ContextApi";

const CenterHeader = () => {
  const { posts } = useContext(FetchContext);
  return (
    <div className="header__middle">
      <div className="coverpost_top">
        {posts
          .map((post) => {
            return <CoverPost post={post} key={post._id}/>;
          })
          .slice(posts.length - 1, posts.length )}
      </div>

      <CenterBottom />
    </div>
  );
};

export default CenterHeader;
