import React from "react";
import styles from "./PostDetails.module.css";
import PostCard from "../../components/PostCard/PostCard";
import { Link } from "react-router-dom";

const PostDetails = (props) => {
  const dogIds = [
    1025, 1012, 1062, 1084, 169, 200, 219, 237, 244, 275, 40, 433, 577, 582,
    593, 611, 659, 718, 783, 790, 824, 837, 881, 937, 943,
  ];

  return (
    <>
      <div className={styles.container}>
        {props.posts.map((post) => (
          <Link to="/article-details" state={{ post }}>
            <PostCard
              post={post}
              key={post._id}
              randDogImgId={dogIds[Math.floor(Math.random() * dogIds.length)]}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default PostDetails;
