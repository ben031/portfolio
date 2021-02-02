import React from "react";
import styled from "styled-components";

const Work = () => {
  return (
    <WorkSection>
      <div>
        <p>준비 중 입니다. 시간을 주시면 좋은 결과물로 보답하겠습니다.</p>
      </div>
    </WorkSection>
  );
};

export default Work;

const WorkSection = styled.section`
  width: 70%;
  height: calc(100vh - 5.6rem);
  margin: 0 auto;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 400;
`;
