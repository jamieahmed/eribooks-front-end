import React from "react";

const PostCard = ({ post, randDogImgId }) => {
  return (
    <div className="card">
      <img
        src={
          post.photo
            ? post.photo
            : `https://picsum.photos/id/${randDogImgId}/640/480`
        }
        alt="post-image"
        className="card-img-top"
      />
      <div className="card-body">
        <h2 className="card-text">{post.title}</h2>
        <p>{post.description}</p>
      </div>
    </div>
  );
};

export default PostCard;
