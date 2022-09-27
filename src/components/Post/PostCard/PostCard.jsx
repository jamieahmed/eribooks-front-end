import React from "react";
import "./PostCard.css";
import moment from "moment";
import { Link } from "react-router-dom";


const PostCard = ({ post, randDogImgId }) => {
  return (
    <>
      <Link to="/post/id" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="card">
          <img
            src={
              post.photo
                ? post.photo
                : `https://picsum.photos/id/${randDogImgId}/640/480`
            }
            alt="postImage"
            className="card-img-top"
          />
          <div className="card-body">
            <p>{moment(post.createdAt).fromNow()}</p>
            <h2 className="card-text">{post.title}</h2>
            <p>{post.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PostCard;
