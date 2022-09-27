import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 2;
`;

const RecommendationTitle = styled.strong`
  color: red;
  font-weight: bolder;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Recommendation = () => {
  return (
    <Container>
      <div>
        <RecommendationTitle>Recommendation</RecommendationTitle>
      </div>
      Recommendation
    </Container>
  );
};

export default Recommendation;
