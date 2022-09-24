import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import Comments from "../../../components/CommentPage/comments/Comments";
import Recommendation from "../../../components/RecommendationPage/Recommendation";

const PostPicWrapperSrc =
  "https://tse4.mm.bing.net/th?id=OIP.4qkiSqPxOGj9aWHWT01l5QHaEo&pid=Api&P=0";

const PostAuthorProfilePic =
  "https://tse2.mm.bing.net/th?id=OIP.4gcGG1F0z6LjVlJjYWGGcgHaHa&pid=Api&P=0";

const Container = styled.div`
  display: flex;
  gap: 24px;
  padding: 22px 96px;
`;

const Content = styled.div`
  flex: 5;
`;

const PostAuthorInfo = styled.p`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const PostAuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
`;

const PostAuthorName = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const PostAuthorRole = styled.span`
  font-size: 14px;
`;

const PostPicWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: white;
  text-align: center;
`;

const Header = styled.p`
  display: flex;
  justify-content: space-between;
`;
const Categroy = styled.span`
  display: flex;
  justify-content: flex-start;
`;

const UpdatedAt = styled.span`
  display: flex;
  justify-content: flex-end;
`;

const SubTitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: white;
`;

const Intro = styled.p`
  font-size: 14px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Summary = styled.p`
  font-size: 14px;
`;
const MyOtherPosts = styled.p`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Buttons = styled.div`
  display: flex;
  gap: 100px;
  color: white;
`;

const Button = styled.div`
  display: flex;
  gap: 5px;
  cursor: pointer;
  align-items: center;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid white;
`;

const AllPostDetails = () => {
  return (
    <Container>
      <Content>
        <PostAuthorInfo>
          <Avatar src={PostAuthorProfilePic} />
          <PostAuthorDetails>
            <PostAuthorName>
              <strong>Author ➡️ </strong> Jamie Ahmed
            </PostAuthorName>
            <PostAuthorRole>
              Jamie Ahmed is Professional software engineer,Author and Manager
              <strong> Read full profile</strong>
            </PostAuthorRole>
          </PostAuthorDetails>
        </PostAuthorInfo>
        <PostPicWrapper>
          <img width="100%" height="415" src={PostPicWrapperSrc} alt="" />
        </PostPicWrapper>
        <Header>
          <Categroy>
            <strong>Categroy:</strong>
            Success mindset
          </Categroy>
          <UpdatedAt>Last Updated or published on August 31, 2022</UpdatedAt>
        </Header>
        <Hr />
        <Title>Post Title</Title>
        <SubTitle>Intro to Details</SubTitle>
        <Intro>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At vitae
          minima sint quidem dicta, nihil quod facilis error ea, modi aut sed
          placeat vero odit optio animi. Modi, neque sit.
        </Intro>
        <SubTitle>Description</SubTitle>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          modi quod nisi similique ad maxime inventore? Perferendis, explicabo
          rerum doloribus est delectus eos minus officia vero aspernatur cum
          fugit itaque. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Culpa ex laborum a architecto rem facere voluptatum consequatur
          dolor reprehenderit hic. Consequuntur omnis quis aliquam voluptates
          consectetur accusamus voluptatem veniam fuga. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Ipsa quaerat facilis ab fugit
          reiciendis obcaecati, odit similique perspiciatis ut dolores quos,
          animi molestias impedit ullam voluptas magnam facere quae voluptates.
        </Description>
        <SubTitle>Summary</SubTitle>
        <Summary>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor quis
          nihil cum doloribus explicabo modi assumenda officia suscipit id
          accusantium fuga et odio culpa, labore cumque fugiat. Eum, et dolores.
        </Summary>
        <SubTitle>Read my other posts</SubTitle>
        <MyOtherPosts>
          <span>What Is Compassion Fatigue?</span>
          <span>What Is Incentive Motivation?</span>
          <span>
            How to Get Over Your Fear of Confrontation with Confidence
          </span>
        </MyOtherPosts>
        <Details>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> 567
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Comments />
      </Content>
      <Recommendation />
    </Container>
  );
};

export default AllPostDetails;
