import React from "react";
import styled from "styled-components";
import Comment from "../Comment/Comment";

const commentWriterPic =
  "https://tse2.mm.bing.net/th?id=OIP.4gcGG1F0z6LjVlJjYWGGcgHaHa&pid=Api&P=0";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 0.5px solid white;
  color: white;
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src={commentWriterPic} />
        <Input placeholder="Type your  comment here..............." />
      </NewComment>
      <Comment />
    </Container>
  );
};

export default Comments;
